import React from 'react'
import { Button } from '@chakra-ui/react'
import './hero.scss';
import Netflix from '../../assets/icons/netflix.svg'
import Github from '../../assets/icons/github.svg'
import Dropbox from '../../assets/icons/dropbox.svg'
import Apple from '../../assets/icons/apple.svg'
import Google from '../../assets/icons/google.svg'
import Spotify from '../../assets/icons/Spotify.svg'
import Facebook from '../../assets/icons/Facebook.svg'
import Alex from '../../assets/icons/mouse-alex.svg'
import Bouba from '../../assets/icons/mouse-bouba.svg'
import Lily from '../../assets/icons/mouse-lily.svg'
import Char from '../../assets/icons/mouse-char.svg'

export default function hero() {
    return (
        <article className='hero'>

            <div className='hero__content'>
                <div className="hero__title">
                    <h1>Where hiring comes together.</h1>
                    <img className='icon icon--alex' src={Alex} alt="mouse icon with text Alexandre" width={75} height={26} />
                    <img className='icon icon--lily' src={Lily} alt="mouse icon with text Lily" width={46} height={36} />
                    <img className='icon icon--bouba' src={Bouba} alt="mouse icon with text Bouba" width={63} height={36} />
                    <img className='icon icon--char' src={Char} alt="mouse icon with text Charlotte" width={75} height={26} />
                </div>
                <p className='hero__subtitle'>Everything you need to organise your hiring and make a great impression.</p>

                <Button colorScheme='brandPurple' size='xl'>Get Started - It's free!</Button>

                <div className="hero__images">
                    <p className='hero__images__title'>Join thousands of teams hiring with Homerun.</p>

                    <div className="hero__images__row">
                        <img src={Google} alt="google logo" width={72} height={24} />
                        <img src={Apple} alt="apple logo" width={22} height={26} />
                        <img src={Facebook} alt="facebook logo" width={93} height={18} />
                        <img src={Spotify} alt="spotify logo" width={80} height={24} />
                        <img src={Dropbox} alt="dropbox logo" width={101} height={20} />
                        <img src={Github} alt="github logo" width={26} height={26} />
                        <img src={Netflix} alt="netflix logo" width={66} height={18} />
                    </div>
                </div>



            </div>

        </article>
    )
}
