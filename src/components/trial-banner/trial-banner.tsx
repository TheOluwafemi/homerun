import React from 'react'
import './trial-banner.scss'
import { Button, Heading } from '@chakra-ui/react'
import CheckIcon from '../../assets/icons/check-icon-white.svg'

export default function trialbanner() {
    return (
        <div className='banner'>
            <div className="banner__left">
                <h3 className='banner__title'>Start your free
                    Homerun trial today</h3>
            </div>


            <div className='banner__right'>
                <div className='banner__text--small'>
                    <img src={CheckIcon} alt="check icon" width={20} height={20} loading="lazy" />
                    <span>Totally free for 15 days</span>
                </div>

                <div className='banner__text--small'>
                    <img src={CheckIcon} alt="check icon" width={20} height={20} loading="lazy" />
                    <span>No credit card needed</span>
                </div>

                <Button colorScheme="brandBlack" size='xl'>Get Started - It's free!</Button>
            </div>
        </div>
    )
}
