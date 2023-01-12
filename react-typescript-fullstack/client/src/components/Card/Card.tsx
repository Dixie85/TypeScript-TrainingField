import React from 'react'
import './Card.css'
import { IPuppiesStateData } from '../../interfaces/interfaces'


interface ICardPuppies {
  puppy: IPuppiesStateData,
  homeViewStyling?: string | undefined
}

const Card = ({ puppy, homeViewStyling }: ICardPuppies) => {

  return (
    <article className={!homeViewStyling ? 'card' : 'card-home-page-view'}>
      <div className='card_style-container'>
        <img src={`https://placedog.net/500/300?id=${Number(puppy.id) + 150}`} 
          alt="Puppy"
          className={!homeViewStyling ? 'card__img' : 'card-home-page-view__card__img' } />
        {homeViewStyling ? '' : <div className='card__div-text-container'><span>Name:</span><span>{puppy.name}</span></div>}
        {homeViewStyling ? '' : <div className='card__div-text-container'><span>Breed:</span><span>{puppy.breed}</span></div>}
        {homeViewStyling ? '' : <div className='card__div-text-container'><span>Date of birth:</span><span>{puppy.birthDate}</span></div>}
      </div>
    </article>
  )
}

export default Card


