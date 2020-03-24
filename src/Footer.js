import React from 'react';
import Tweet from './tweet.png';
import Discord from './discord.png';
import './index.css'

export default function Footer(){
    return (
        <footer>
            
            
            <div id="contact_footer">
                <h3>Retrouvez-nous sur:</h3>
                <a href="https://twitter.com"><img src={Tweet} alt="Tweeter Logo" className="rotation" /></a>
                <a href="https://discord.gg/YAfQVFF"><img src={Discord} width="50" height="50" alt="Discord Logo" className="rotation" /></a>
            </div>
            
            <div id="info_legales">
                <p>Informations légales</p>
                <p className="copyright">&copy; Copyright 2020 - AFRICARONA.COM - written by Guinean In Tech</p>
                <p>AFRICARONA.COM n'est rattaché à aucun gouvernement</p>
            </div>

            {/*<p className="hautdepage"><a href="index.html#hautpage" >Haut de page</a></p>*/}
            


        </footer>
    )
}