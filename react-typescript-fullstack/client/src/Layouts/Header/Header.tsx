import './Header.css'
import Logo from '../../Asserts/Images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className='header'>
      <article className='header__logo-wrapper'>
        <Link to={'/'} style={{ textDecoration: "none" }}>
          <img className='logo' src={Logo} alt='Logo' />
        </Link>
      </article>
      <article className='header__button-wrapper'>
        <Link to={'/'} style={{ textDecoration: "none" }}>
          <span className='header__nav-btn'>Home</span>
        </Link>
        <Link to={'/instructions'} style={{ textDecoration: "none" }}>
          <span className='header__nav-btn'>Instructions</span>
        </Link>
      </article>
    </section>
  )
}

export default Header 