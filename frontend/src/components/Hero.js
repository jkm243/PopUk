import React from 'react'
import logo from '../assets/logo3.png'
import '../styles/responsive.css'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-content">
                <div className='mil'>
                    <div className='hero-logo'>
                        <img className='logo-central' src={logo} alt='logo' />
                    </div>
                    <div className="hero-title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odit quia debitis repellendus maiores eum. Alias repellendus sint, ullam eveniet reprehenderit id voluptas, perspiciatis tempore blanditiis eius aperiam recusandae a.
                        Voluptates assumenda consequuntur ut, non rem reprehenderit a adipisci mollitia,
                    </div>
                    <div className="les_liens">
                        <ul>
                            <li className="liens"><a href="inscription.html">S'inscrire</a></li>
                            <li className="liens2"><a href="login.html">Se connecter</a></li>
                        </ul>
                    </div>
                    <p className="hero-footer">Tout droits réservés - Jacques Katsuva - Copyright 2019</p>
                </div>
            </div>
        </div>
    )
}

export default Hero