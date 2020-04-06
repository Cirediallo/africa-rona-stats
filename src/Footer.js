import React from 'react';
import Tweet from './tweet.png';
import Discord from './discord.png';
import './index.css'

export default function Footer(){
    return (
      
         <div className= "text-center">
         <h3>Retrouvez-nous sur</h3>
                <a href="https://twitter.com"><img src={Tweet} alt="Tweeter Logo" className="rotation" /></a>
                <a href="https://discord.gg/YAfQVFF"><img src={Discord} width="50" height="50" alt="Discord Logo" className="rotation" /></a> <br></br> 
            Informations légales
  © Copyright 2020 - AFRICARONA.COM - written by Guinean In Tech 
  AFRICARONA.COM n'est rattaché à aucun gouvernement
        </div>
    )
}