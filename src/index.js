import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Country from './Country'
import './index.css'

export default function App(){
    return (
        <div>
            <Header />
            <Country />
            <Footer />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)