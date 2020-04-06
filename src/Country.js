import React from 'react'
import ListCountry from './ListCountries'
import Form from 'react-bootstrap/Form';
import moment from 'moment';

export default class Country extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            confirmed:0,
            deaths: 0,
            recovered: 0,
            updateTime: Date(),

            a_confirmed: 0,
            a_deaths: 0,
            a_recovered: 0
        };   

        this.handleChange = this.handleChange.bind(this)
    }

    async handleChange(event){
        console.log(event.target.value)
        const url = `https://covid19.mathdro.id/api/countries/${event.target.value}`;
        
        
        const response = await fetch(url)
        const data = await response.json()
        
        this.setState({
            a_recovered: data.recovered.value,
            a_deaths: data.deaths.value,
            a_confirmed: data.confirmed.value
        })
    }

    async componentDidMount(){
        const url = "https://covid19.mathdro.id/api/countries/GN";
        const response = await fetch(url);
        const data = await response.json();

        const a_url = "https://covid19.mathdro.id/api/countries/DZ";
        const a_response = await fetch(a_url);
        const a_data = await a_response.json();
        

        const updateTimeURL = "https://covid19.mathdro.id/api";
        const updateTimeFetch = await fetch(updateTimeURL);
        const date = await updateTimeFetch.json();

        //console.log(data)

        this.setState({
            confirmed: data.confirmed.value,
            recovered: data.recovered.value,
            deaths: data.deaths.value,
            updateTime: date.lastUpdate,

            a_confirmed: a_data.confirmed.value,
            a_recovered: a_data.recovered.value,
            a_deaths: a_data.deaths.value

        })
        
    }

    
    render(){
        return(
<main className="container-fluid">
    <h2 className="text-center text-dark">Informations sur le cas du Covid-19 en Afrique</h2><br></br>
    <h6 className="text-right text-dark">Dernière mise à jour: {moment().format('MMMM Do YYYY, h:mm:ss a')}</h6>
    <div className="container">
    <h4 className="text-left text-dark">Éclosion en Guinée:</h4><br></br>
  <div className="row justify-content-md-center">
    <div className="col-xs-1 col-md-3" >
      <div className="card mb-4 shadow-sm">
      <div className="card-head bg-info text-white">
          <h3 className="card-text" className="text-center">Confirmé(s)</h3>
        </div>
        <div className="card-body">
          <h3 className="card-text" className="text-center text-info">{this.state.confirmed}</h3>
          <br></br>
        </div>
      </div>
    </div>
    <div className="col-xs-1 col-md-3" >
      <div className="card mb-4 shadow-sm">
      <div className="card-head bg-success text-white">
          <h3 className="card-text" className="text-center">Retabli(s):</h3>
        </div>
        <div className="card-body">
          <h3 className="card-text" className="text-center text-success">{this.state.recovered}</h3>
          <br></br>
        </div>
      </div>
    </div>
    <div className="col-xs-1 col-md-3" >
      <div className="card mb-4 shadow-sm">
      <div className="card-head bg-danger text-white">
          <h3 className="card-text" className="text-center">Mort(s):</h3>
        </div>
        <div className="card-body">
          <h3 className="card-text" className="text-center text-danger">{this.state.deaths}</h3>
          <br></br>
        </div>
      </div>
    </div>
    </div>
    </div>
    <br></br>                  
    <div className="container">
    <h4 className="text-left text-dark">Les autres pays :</h4><br></br>
    <Form className="row justify-content-md-center">  
    <div className="form-inline my-2 my-lg-0">
        <Form.Label className="mr-sm-2"><h4>Selectionnez un pays:</h4></Form.Label>
        <Form.Control as="select" size="sm" custom onChange={this.handleChange}>
        {Object.entries(ListCountry).map(
            ([country, code]) => (
                <option key={code} value={code}>{country}</option>
            )
            )}
        </Form.Control>
    </div>
    </Form> 
    <br></br>
  <div className="row justify-content-md-center">
    <div className="col-xs-1 col-md-3">
      <div className="card mb-4 shadow-sm">
      <div className="card-head bg-info text-white">
          <h3 className="card-text" className="text-center">Confirmé(s)</h3>
        </div>
        <div className="card-body">
          <h3 className="card-text" className="text-center text-info">{this.state.a_confirmed}</h3>
          <br></br>
        </div>
      </div>
    </div>
    <div className="col-xs-1 col-md-3" >
      <div className="card mb-4 shadow-sm">
      <div className="card-head bg-success text-white">
          <h3 className="card-text" className="text-center">Retabli(s):</h3>
        </div>
        <div className="card-body">
          <h3 className="card-text" className="text-center text-success">{this.state.a_recovered}</h3>
          <br></br>
        </div>
      </div>
    </div>
    <div className="col-xs-1 col-md-3" >
      <div className="card mb-4 shadow-sm">
      <div className="card-head bg-danger text-white">
          <h3 className="card-text" className="text-center">Mort(s):</h3>
        </div>
        <div className="card-body">
          <h3 className="card-text" className="text-center text-danger">{this.state.a_deaths}</h3>
          <br></br>
        </div>
      </div>
    </div>
    </div>
    </div>  
        <br></br>
        <p className="row justify-content-md-end">Sources de données <a href="https://github.com/mathdroid/covid-19-api" target="_blank" rel="noopener noreferrer">Muhamed Mustadi</a></p>
</main>
);
}
};
/*
const countries = {
    "Algeria": "DZ",
    "Angola": "AO",
    "Benin": "BJ",
    "Botswana": "BW",
    "Burkina Faso": "BF",
     "Burundi": "BI", 
     "Cameroon": "CM", 
     "Cap Verde": "CV", 
     "Chad": "TD",
    "Djibouti": "DJ",
    "Egypt": "EG", 
    "Equatorial Guinea": "GQ",
    "Eritrea": "ER", 
    "Ethiopia": "ET",
      "Gabon": "GA",
      "Gambia": "GM",
      "Ghana": "GH",
    "Guinea": "GN",
    "Guinea-Bissau": "GW",
    "Ivory Coast": "CI", 
    "Kenya": "KE",
     "Liberia": "LR",
      "Lybia": "LY", 
      "Malawi":"MW",
    "Mali": "ML",
     "Morocco": "MA",
     "Namibia": "NA", 
     "Niger": "NE", 
     "Nigeria": "NG", 
     "Republic of the Congo": "CG",
     "Rwanda": "RW",
    "Senegal": "SN",
    "Sierra Leone": "SL",
    "Somalia": "SO",
    "South Africa": "ZA",
    "South Sudan": "SS",
    "Sudan": "SD",
    "Tanzania": "TZ",
    "Togo": "TG",
    "Tunisia": "TN",
    "Uganda": "UG",
    "Zambia": "ZM",
    "Zimbabwe": "ZW"
}
*/