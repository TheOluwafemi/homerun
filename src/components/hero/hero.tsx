import React from 'react'
import { Container, Button } from '@chakra-ui/react'
import './hero.scss';
import Netflix from '../../assets/icons/netflix.svg'
import Github from '../../assets/icons/github.svg'
import Dropbox from '../../assets/icons/dropbox.svg'
import Apple from '../../assets/icons/apple.svg'
import Google from '../../assets/icons/google.svg'
import Spotify from '../../assets/icons/Spotify.svg'
import Facebook from '../../assets/icons/Facebook.svg'

export default function hero() {
    return (
        <article className='hero'>

            <div className='hero__content'>
                <h1 className='hero__title'>Where hiring comes together.</h1>
                <p className='hero__subtitle'>Everything you need to organise your hiring and make a great impression.</p>

                <Button colorScheme='purple' size='lg'>Get Started - It's free!</Button>

                <div className="hero__images">
                    <p className='hero__images__title'>Join thousands of teams hiring with Homerun.</p>

                    <div className="hero__images__row">

                        <img src={Google} alt="google logo" />
                        <img src={Apple} alt="apple logo" />
                        <img src={Facebook} alt="facebook logo" />
                        <img src={Spotify} alt="spotify logo" />
                        <img src={Dropbox} alt="dropbox logo" />
                        <img src={Github} alt="github logo" />
                        <img src={Netflix} alt="netflix logo" />
                    </div>


                </div>



            </div>

        </article>
    )
}
