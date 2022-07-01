import React from 'react'
import '../../assets/styles/mid-section.scss'
import CollaborateImage from '../../assets/images/collaborate.png'

export default function
    () {
    return (
        <section className='mid-section'>
            <div className="mid-section__content">
                <div className='mid-section__image'>
                    <img className='mid-section__img' src={CollaborateImage} alt="Organize your hiring" width={740} height={380} loading="lazy" />
                </div>

                <article className='mid-section__article'>
                    <p className='mid-section__label' style={{ color: '#FF2E57' }}>Collaborate</p>
                    <h3 className='mid-section__title'>Collaborate with your team</h3>
                    <p className='mid-section__subtitle'>It’s easy for your whole team to join
                        in on hiring.</p>
                </article>
            </div>
        </section>
    )
}
