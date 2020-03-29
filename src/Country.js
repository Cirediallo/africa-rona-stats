import React from 'react'
import ListCountry from './ListCountries'


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
            <main>
                <div id="main">
                    <section id="guinea" className="outbreak">
                        <div className="headline">
                            <h3>Guinea Outbreak</h3>
        <span className="updatetime">last update: {this.state.updateTime}</span>
                        </div>
                        <div id="content">
                            <div className="case case_number_confirmed">
                                <h4>Confirmé(s)</h4>
                                <div className="case_number">{this.state.confirmed}</div>
                            </div>
                            <div className="case case_number_recovered">
                                <h4>Retabli(s):</h4>
                                <div className="case_number">{this.state.recovered}</div>
                            </div>
                            <div className="case case_number_deaths">
                                <h4>Mort(s):</h4>
                                <div className="case_number">{this.state.deaths}</div>
                            </div>
                        </div>
                    </section>

                    <section className="outbreak">
                        <div>
                            <label for="countries">Selectionnez un pays: </label>
                            <select id="countries" onChange={this.handleChange}>
                                {Object.entries(ListCountry).map(
                                    ([country, code]) => (
                                        <option key={code} value={code}>{country}</option>
                                    )

                                )}
                            </select>
                        </div>
                        
                        <div id="content">
                            <div className="case case_number_confirmed">
                                <h4>Confirmé(s)</h4>
                                <div className="case_number">{this.state.a_confirmed}</div>
                            </div>
                            <div className="case case_number_recovered">
                                <h4>Retabli(s):</h4>
                                <div className="case_number">{this.state.a_recovered}</div>
                            </div>
                            <div className="case case_number_deaths">
                                <h4>Mort(s):</h4>
                                <div className="case_number">{this.state.a_deaths}</div>
                            </div>
                        </div>
                    </section>
                </div>
                
                
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