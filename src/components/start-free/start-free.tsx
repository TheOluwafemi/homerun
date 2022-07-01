import React from 'react'
import './start-free.scss'
import '../../assets/styles/sections.scss'
import { Button } from '@chakra-ui/react'
import CheckIcon from '../../assets/icons/check-icon-grey.svg'

export default function startfree() {
    return (
        <section className='start section'>
            <p className='section__info section__info--purple'>What are you waiting for?</p>
            <h3 className='start__title section__title section__title--black'>Start your free
                Homerun trial today</h3>


            <Button colorScheme='brandPurple' size='xl'>Get Started - It's free!</Button>

            <div className="start__subtitle">
                <div className='start__group'>
                    <img src={CheckIcon} alt="check icon" width={20} height={20} />
                    <span>Totally free for 15 days</span>
                </div>

                <div className='start__group'>
                    <img src={CheckIcon} alt="check icon" width={20} height={20} />
                    <span>No credit card needed</span>
                </div>
            </div>
        </section>
    )
}
