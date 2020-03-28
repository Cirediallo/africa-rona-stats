import React from 'react'
import './index.css'
import CoronaLogo from './corona.png'
import 'bootstrap/dist/css/bootstrap.css';

export default function Header(){
    return (
        <header>
            <div className="line">
                <div>
                    <img src={CoronaLogo} width="80" height="80" alt="Corona logo" className="coronalogo" />
                </div>
                <div>
                    <nav>
                        <ul>
                            <li><a href="index.html">Acceuil</a></li>
                            <li><a href="informations.html">Informations légales</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="emergency.html">Contacts d'urgence</a></li>
                        </ul>
                    </nav>
                </div>
                
            </div>
            <div className="datafrom">
                <h3>Covid-19 CoronaVirus case informations in Africa</h3>
                <p>Data Sources from <a href="https://github.com/mathdroid/covid-19-api" target="_blank" rel="noopener noreferrer">Muhamed Mustadi</a></p>
            </div>
            
            
        </header>
    )
}