import React from 'react'
import '../../assets/styles/mid-section.scss'
import OrganizeImage from '../../assets/images/organize.png'

export default function 
() {
  return (
    <div className='mid-section'>
          <div className="mid-section__content">
              <article className='mid-section__article'>
                  <p className='mid-section__label' style={{ color: '#179690' }}>Organize</p>
                  <h3 className='mid-section__title'>Organize your hiring</h3>
                  <p className='mid-section__subtitle'>A hiring flow you can wrap your head around.</p>
              </article>

              <div className='mid-section__image'>
                 <img className='mid-section__img' src={OrganizeImage} alt="Organize your hiring" width={740} height={380} /> 
              </div>

              
          </div> 
    </div>
  )
}
