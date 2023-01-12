import React from 'react'
import './Catalog.css'
import { IPuppiesStateData } from '../../interfaces/interfaces'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'

interface ICatalogPuppies {
  puppies: IPuppiesStateData[],
  homeViewStyling?: string
}

const onCatalogClick = (): void => {
  console.log('I CLIKED THE CATALOG');
}

const Catalog = ({ puppies, homeViewStyling }: ICatalogPuppies) => {
  return (
    <Link to='/catalog' style={{ textDecoration: "none" }}>
      <section className={!homeViewStyling ? 'catalog' : 'catalog-home-page-view'} onClick={onCatalogClick}>
        {!homeViewStyling ?
          puppies.map((puppy) => <Link to={{
            pathname: `/puppy/${puppy.id}`,
            hash: '',
            search: '',
          }} state={{ ...puppy }} style={{ textDecoration: "none" }}><Card key={Number(puppy.id)} puppy={puppy} homeViewStyling={homeViewStyling} /></Link>)
          :
          puppies.map((puppy) => <Card key={Number(puppy.id)} puppy={puppy} homeViewStyling={homeViewStyling} />)
        }
      </section>
    </Link>
  )
}

export default Catalog

