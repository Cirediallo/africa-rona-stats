import React from 'react'
import './index.css'
import CoronaLogo from './corona.png'

export default function Header(){
    return (
        <header>
            <div>
                <img src={CoronaLogo} width="80" height="80" alt="Corona logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Acceuil</a></li>
                    <li><a href="informations.html">Informations légales</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="emergency.html">Contacts d'urgence</a></li>
                </ul>
            </nav>
            
        </header>
    )
}