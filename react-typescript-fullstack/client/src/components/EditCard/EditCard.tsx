import React from 'react'
import './EditCard.css'
import { useLocation } from "react-router";
import { IPuppiesStateData } from '../../interfaces/interfaces';
import Form from '../Form/Form';
import Card from '../Card/Card';

interface IEditCard {
    puppies: IPuppiesStateData[]
    setRefetch: React.Dispatch<React.SetStateAction<boolean>>
}

const EditCard = ({ puppies, setRefetch }: IEditCard) => {
    let data = useLocation();
    console.log(data, "USE LOCATIOn");
    const puppy = data.state ?
        puppies.find(puppy => puppy.id === (data.state.id.toString())) :
        { ...data.state }; 
    
    // The above Conditional (ternary) operator was used to avoid the TYPE-undefined
    // ICardPuppies.puppy: IPuppiesStateData //==> expected
    // ICardPuppies.puppy: IPuppiesStateData | undefined  //==> avoided !!!

    return (
        <section className='editcard'>
            <section className='editcard__display-card-section'>
                <div className='editcard__display-card-section__card-wrapper'>
                    <Card puppy={puppy} />
                </div>
                <div className='editcard__display-card-section__text-wrapper'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, at iusto nostrum ab facere dolorem mollitia quaerat, neque quam repudiandae, doloribus natus repellat exercitationem provident nemo! Quos reprehenderit beatae odit?</p>
                </div>
            </section>
            <section className='editcard__display-form-section'>
                <div className='editcard__display-form-section__text-wrapper'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, at iusto nostrum ab facere dolorem mollitia quaerat, neque quam repudiandae, doloribus natus repellat exercitationem provident nemo! Quos reprehenderit beatae odit?</p>
                </div>
                <div className='editcard__display-form__form-conteiner'>
                    <Form puppy={puppy} setRefetch={setRefetch} />
                </div>
            </section>
        </section>
    )
}

export default EditCard