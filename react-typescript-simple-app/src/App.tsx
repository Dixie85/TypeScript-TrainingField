import React, { useEffect, useState } from 'react';
import './App.css';
import IntroductionCard from './Components/IntroductionCard/IntroductionCard';
import NameChangeInput from './Components/NameChangeInput/NameChangeInput';
import { initialStateRandomUser } from './initialStates/randomUserState';
import { IUser } from './Types/UserTypes';
import { getRandomUserData } from './utilities/fetchRandomUserDataFun';

function App() {
  const [randomUser, setRandomUser] = useState<IUser>(initialStateRandomUser);
  console.log(randomUser.name.first);

  useEffect( () => {
      const awaitData = async () => {
      const randomUserData = await getRandomUserData();
      setRandomUser(prevUser => {return { ...prevUser, ...randomUserData}})
    }
    awaitData()
  }, [])

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    const value = e.currentTarget.value
    setRandomUser(prevUser => {return { ...prevUser, name: {...prevUser.name, first : value}}})
  }

  return (
    <div className="App">
      <IntroductionCard randomUser={randomUser} />
      <NameChangeInput randomUser={randomUser} onNameChanged={handleChange}/>
    </div>
  );
}

export default App;
