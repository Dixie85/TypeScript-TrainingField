import './Main.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Catalog from '../../components/Catalog/Catalog';
import EditCard from '../../components/EditCard/EditCard';
import Home from '../../components/Home/Home';
import { IPuppiesStateData } from '../../interfaces/interfaces';
import Instructions from '../../components/Instructions/Instructions';


function Main() {
  const [puppies, setPuppies] = useState<IPuppiesStateData[]>([{} as IPuppiesStateData])
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    if (!refetch){ 
      const getApiData = async () => {
        const data = await axios('http://localhost:8080/api/puppies');
        const puppyData: IPuppiesStateData[] = data.data
        setPuppies([...puppyData])
      }
      getApiData()
      setRefetch( () => true )
    }
  }, [refetch])

  return (
    <main className='main'>
      <Routes>
        <Route path="/" element={<Home puppies={puppies} />}></Route>
        <Route path="/catalog" element={<Catalog puppies={puppies} />}></Route>
        <Route path="/puppy/:id" element={<EditCard puppies={puppies} setRefetch={setRefetch}/>}></Route>
        <Route path="/instructions" element={<Instructions />}></Route>
      </Routes >
    </main>
  );
}

export default Main;