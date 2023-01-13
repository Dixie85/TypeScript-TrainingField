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
                  <p>{`Welcome to the Hapi-pappY challenge. There are many cute puppies waiting for you to give them your favorite puppy name.  Hapi-pappY knows you are a big puppy lover and you know all about them. The challenge  Hapi-pappY  givees you is to provide the puppies their correct breed. Use your knowledge or do a research and make all those puppies Happy! get it? : )`}</p>
                </article>
                <p>Read the Instructions first</p>
                <p>or click on the catalog to proceed ⇒</p>
            </section>
            <section className='homepage_catalog-section'>
                <Catalog puppies={puppies} homeViewStyling={'catalog-home-page-view'} />
            </section>
        </section>
    )
}

export default Home