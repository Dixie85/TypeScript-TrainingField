import React from 'react'
import './Home.css'
import { IPuppiesStateData } from '../../interfaces/interfaces'
import Catalog from '../Catalog/Catalog'

interface IHomePuppies {
    puppies: IPuppiesStateData[]
}

const Home = ({ puppies }: IHomePuppies) => {
    return (
        <section className='homepage'>
            <section className='homepage_introduction-section'>
                <article className='homepage_introduction-section_article'>
                  <h1>Hapi-pappY</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit maxime illum, ad velit dolorum accusamus expedita assumenda adipisci beatae officiis quis ducimus dolores ut impedit at odit atque laborum minima.</p>
                </article>
                <p>Click the galery to se more ⇒</p>
            </section>
            <section className='homepage_catalog-section'>
                <Catalog puppies={puppies} homeViewStyling={'catalog-home-page-view'} />
            </section>
        </section>
    )
}

export default Home