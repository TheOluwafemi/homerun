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
          <ul className="nav__items">
            <li className="nav__item">
              <a href="#">Product</a>
              <img src={Expand} alt="expand" width={20} height={4} />
            </li>
            <li className="nav__item">
              Pricing
            </li>
            <li className="nav__item">
              Customers
            </li>
            <li className="nav__item">
              <a href="#">Learn</a>
              <img src={Expand} alt="expand" width={20} height={4} />
            </li>
          </ul>
        </div>

        <div className="nav__cta">
          <Button colorScheme='brandPurple' variant='link'>
            Log In
          </Button>

          <Button colorScheme='brandPurple'>Start 14-day trial</Button>

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
            <ul className="nav__items">
              <li className="nav__item">
                <a href="#">Product</a>
                <img src={Expand} alt="expand" width={20} height={4} />
              </li>
              <li className="nav__item">
                Pricing
              </li>
              <li className="nav__item">
                Customers
              </li>
              <li className="nav__item">
                <a href="#">Learn</a>
                <img src={Expand} alt="expand" width={20} height={4} />
              </li>
            </ul>
          </div>
        }
      </Fade>
    </nav>
  )
}
