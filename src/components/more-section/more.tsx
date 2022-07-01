import React from 'react'
import "./more.scss";
import HeadOfSales from '../../assets/images/head-of-sales.png'
import Thumbs from '../../assets/images/thumbs-up-down.png'
import Alexandre from '../../assets/images/mouse-alexandre.png';
import Bouba from '../../assets/images/mouse-bouba.png';
import Charlotte from '../../assets/images/mouse-charlotte.png';
import Lily from '../../assets/images/mouse-lily.png';
import Tags from '../../assets/images/tags.png';
import Rectangle from '../../assets/images/rectangle.png';
import Fonts from '../../assets/images/fonts.png';

export default function more() {
    return (
        <section className='more'>
            <div className='more__header'>
                <h3 className='more__title'>But wait.There is more</h3>
                <p className='more__subtitle'>Leverage winning strategies to best promote jobs.
                    Find the ideal candidate faster.</p>
            </div>

            <div className="cards">
                <div className="card card__one card--white">
                    <div className="card__header"></div>
                    <div className="card__body">
                        <img src={HeadOfSales} alt="head of sales" width={347} height={52} loading='lazy' />
                    </div>

                    <div className="card__footer">
                        <h5 className='footer__title footer__title--black'>Job Editor</h5>
                        <p className='footer__subtitle footer__subtitle--black'>Our easy-to-use editor allows you to create customized job ads within minutes.</p>
                    </div>
                </div>

                <div className="card card__two card--yellow">
                    <div className="card__header"></div>
                    <div className="card__body">
                        <img className='card__img' src={Thumbs} alt="accept and reject" width={244} height={146} loading="lazy" />
                    </div>

                    <div className="card__footer">
                        <h5 className='footer__title footer__title--white'>Accept & Reject</h5>
                        <p className='footer__subtitle footer__subtitle--white'>Automate tasks and save time.
                            With one click you can accept or
                            reject candidates.</p>
                    </div>
                </div>

                <div className="card card--full card--teal card__three">
                    <div className="card__header"></div>
                    <div className="card__body card__body--fixed">
                        <img className='card__img card__img--alex' src={Alexandre} alt="accept and reject" width={300} height={100} loading="lazy" />

                        <img className='card__img card__img--bouba' src={Bouba} alt="accept and reject" width={200} height={100} loading="lazy" />

                        <img className='card__img card__img--lily' src={Lily} alt="accept and reject" width={200} height={100} loading="lazy" />

                        <img className='card__img card__img--charlotte' src={Charlotte} alt="accept and reject" width={250} height={100} loading="lazy" />


                    </div>

                    <div className="card__footer card__footer--padded">
                        <h5 className='footer__title footer__title--white'>Team Collaboration and Communication</h5>
                        <p className='footer__subtitle footer__subtitle--white'>Exchange ideas and progress with team members to make the right decisions together.</p>
                    </div>
                </div>

                <div className="card card--blue card__four">
                    <div className="card__header"></div>
                    <div className="card__body card__body--fixed">

                        <img src={Tags} alt="create custom tags" width={295} height={256} loading="lazy" />

                    </div>

                    <div className="card__footer">
                        <h5 className='footer__title footer__title--white'>Create Custom Tags</h5>
                        <p className='footer__subtitle footer__subtitle--white'>Tags help you organize and structure candidates more efficiently.</p>
                    </div>
                </div>

                <div className="card card__five card--purple">
                    <div className="card__header"></div>
                    <div className="card__body">
                        <div className="rectangle">
                            <div className="rectangle--small">
                                <div className="rectangle--smaller"></div>
                            </div>
                        </div>
                    </div>

                    <div className="card__footer">
                        <h5 className='footer__title footer__title--white'>Responsive</h5>
                        <p className='footer__subtitle footer__subtitle--white'>Flexible ads without being a techie.</p>
                    </div>
                </div>

                <div className="card card__six card--pink">
                    <div className="card__header"></div>
                    <div className="card__body">
                        <img className='card__img' src={Fonts} alt="Boost Your Employer Branding" width={244} height={146} loading="lazy" />
                    </div>

                    <div className="card__footer">
                        <h5 className='footer__title footer__title--white'>Boost Your Employer Branding</h5>
                        <p className='footer__subtitle footer__subtitle--white'>Stand out with your branded careers site - including your company’s own custom URL.</p>
                    </div>
                </div>


                <div className="card card__seven card--white">
                    <div className="card__header"></div>
                    <div className="card__body">
                        <div className="notes">
                            Strong Yes! We should move forward
                            with him and see how it goes :)
                            He has demonstrated all the soft skills
                            we were looking for
                        </div>
                    </div>

                    <div className="card__footer">
                        <h5 className='footer__title footer__title--black'>Notes</h5>
                        <p className='footer__subtitle footer__subtitle--black'>Collect your thoughts and share them with colleagues.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
