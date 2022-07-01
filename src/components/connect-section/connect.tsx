import React from 'react'
import '../../assets/styles/mid-section.scss'
import ConnectImage from '../../assets/images/connect.png'

export default function
    () {
    return (
        <section className='mid-section'>
            <div className="mid-section__content">
                <article className='mid-section__article'>
                    <p className='mid-section__label' style={{ color: '#33D1EA' }}>Connect</p>
                    <h3 className='mid-section__title'>Connect with candidates</h3>
                    <p className='mid-section__subtitle'>Stand out and show candidates
                        who you are.</p>
                </article>

                <div className='mid-section__image'>
                    <img className='mid-section__img' src={ConnectImage} alt="Organize your hiring" width={740} height={380} loading="lazy" />
                </div>
            </div>
        </section>
    )
}
