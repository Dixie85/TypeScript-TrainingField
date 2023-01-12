import React, { useState } from 'react'
import './Form.css'
import { IPuppiesStateData } from '../../interfaces/interfaces'
import Button from '../Button/Button';
import axios from 'axios';

interface IFormPuppies {
  puppy: IPuppiesStateData,
  setRefetch: React.Dispatch<React.SetStateAction<boolean>>
}

const Form = ({ puppy, setRefetch }: IFormPuppies) => {
  const [formValues, setFormValues] = useState({});
  const [isEdit, setIsEdit] = useState(true);
  
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};
  

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    console.log(e.currentTarget.value, 'EVENT STATE');
    if (e.currentTarget.value === 'Add') setIsEdit(prev => false);
    if (e.currentTarget.value === 'Edit') setIsEdit(prev => true);
  }

  const handleSubmitEditForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.put(`http://localhost:8080/api/puppies/${puppy.id}`, formValues, {
			headers: {
				'accept': 'application/json',
				'Accept-Language': 'en-US,en;q=0.8',
			}
		});
		// setFormValues({});
    console.log(response, 'LOGING THE RESPONCE');
    setRefetch(() => false)
  }

  const handleSubmitAddNewForm = async (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/puppies',formValues,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
      // console.log(JSON.stringify(response, null, 4));
      console.log(response);
      setRefetch(() => false)
      return 
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return
      } else {
        console.log('unexpected error: ', error);
        return
      }
    }
 }
  

  return (
    <div className='form-wrapper'>
      <Button onButtonClick={onButtonClick} value={"Edit"} />
      <Button onButtonClick={onButtonClick} value={"Add"} />
      {isEdit ?
        <form className='form' onSubmit={handleSubmitEditForm}>
          <p>EDIT</p>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={handleChange}/>
          <label htmlFor="breed">Breed</label>
          <input type="text" name="breed" onChange={handleChange}/>
          <label htmlFor="birthDate">Birth Date</label>
          <input type="text" name="birthDate" onChange={handleChange}/>
          <div className='form__button-container'>
            <Button onButtonClick={onButtonClick} value={'Submit'} type="submit" />
          </div>
        </form>
        :
        <form className='form' onSubmit={handleSubmitAddNewForm}>
          <p>ADD NEW</p>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={handleChange}/>
          <label htmlFor="breed">Breed</label>
          <input type="text" name="breed" onChange={handleChange}/>
          <label htmlFor="birthDate">Birth Date</label>
          <input type="text" name="birthDate" onChange={handleChange}/>
          <div className='form__button-container'>
            <Button onButtonClick={onButtonClick} value={'Submit'} type="submit" />
          </div>
        </form>
      }

    </div>
  )
}

export default Form