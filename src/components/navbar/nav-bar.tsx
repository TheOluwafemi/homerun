import { useState } from 'react'
import './nav-bar.scss'
import Hamburger from '../../assets/icons/hamburger.svg'
import Close from '../../assets/icons/close.svg'
import Expand from '../../assets/icons/expand.svg'
import Logo from '../../assets/images/homerun-logo.png'
import { Button, Fade } from '@chakra-ui/react'

export default function navbar() {
  const [isNavOpened, setIsNavOpened] = useState(false)

  return (
    <nav className='nav'>
      <div className="nav__content">

        <div className="nav__logo">
          <img src={Logo} alt="Homerun logo" width={120} height={25} />
        </div>

        <div className="nav__menu">
          <ul className="nav__item">
            <li className="nav__items">
              <a href="#">Product</a>
              <img src={Expand} alt="expand" />
            </li>
            <li className="nav__items">
              Pricing
            </li>
            <li className="nav__items">
              Customers
            </li>
            <li className="nav__items">
              <a href="#">Learn</a>
              <img src={Expand} alt="expand" />
            </li>
          </ul>
        </div>

        <div className="nav__cta">
          <Button colorScheme='purple' variant='link'>
            Log In
          </Button>

          <Button colorScheme='purple'>Start 14-day trial</Button>

        </div>

        <div className="nav__responsive">
          {!isNavOpened && <img className='nav__hamburger' src={Hamburger} alt="hamburger" onClick={() => {
            setIsNavOpened(!isNavOpened);
          }} />}

          {isNavOpened && <img className='nav__hamburger' src={Close} alt="close" onClick={() => {
            setIsNavOpened(!isNavOpened);
          }} />}

        </div>

      </div>

      <Fade in={isNavOpened}>
        {
          isNavOpened && <div className="nav__mobile">
            <ul className="nav__item">
              <li className="nav__items">
                <a href="#">Product</a>
                <img src={Expand} alt="expand" />
              </li>
              <li className="nav__items">
                Pricing
              </li>
              <li className="nav__items">
                Customers
              </li>
              <li className="nav__items">
                <a href="#">Learn</a>
                <img src={Expand} alt="expand" />
              </li>
            </ul>
          </div>
        }
      </Fade>




    </nav>
  )
}