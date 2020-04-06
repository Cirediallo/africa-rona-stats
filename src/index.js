import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Country from './Country'
import 'bootstrap/dist/css/bootstrap.css';


import './index.css'

export default function App(){
    return (
        <div className="container-fluid page">
            <Header />
            <Country />
            <hr />
            <Footer />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)