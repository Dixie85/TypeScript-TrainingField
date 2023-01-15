import React from 'react'
import './EditCard.css'
import { useLocation } from "react-router";
import { IPuppiesStateData } from '../../interfaces/interfaces';
import Form from '../../Components/Form/Form';
import Card from '../../Components/Card/Card';

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
                    <p>
                      Now this is where the magic happens. How would you call this puppy? 
                      And can you guess it's breed? If you don't know now is the time to 
                      do a research and then edit the current dummy data. Use your imagination 
                      and try to guess the birth date of the puppy and write it done in the form.
                    </p>
                </div>
            </section>
            <section className='editcard__display-form-section'>
                <div className='editcard__display-form-section__text-wrapper'>
                    <p>
                      We assume you have already noticed the form down below this text. 
                      No doubt is not just an ordinary form. You can either give the puppy of your
                      choose a new name including the correct breed and birth date by clicking on 
                      the EDIT button, or add a brand new puppy by clicking on the ADD button. 
                      Wouldn't that be fun?
                    </p>
                </div>
                <div className='editcard__display-form__form-conteiner'>
                    <Form puppy={puppy} setRefetch={setRefetch} />
                </div>
            </section>
        </section>
    )
}

export default EditCard