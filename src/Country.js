import React from 'react'


export default class Country extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            confirmed:0,
            deaths: 0,
            recovered: 0
        };   
    }

    async componentDidMount(){
        const url = "https://covid19.mathdro.id/api/countries/GN";
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data)

        this.setState({
            confirmed: data.confirmed.value,
            recovered: data.recovered.value,
            deaths: data.deaths.value
            
        })
        
    }

    
    render(){
        return(
            <main>
                <div id="main">
                    <section id="guinea" className="outbreak">
                        <div class="headline">
                            <h3>Guinea Outbreak</h3>
                            <span className="updatetime">last update: </span>
                        </div>
                        <div id="content">
                            <div className="case">
                                <h4>Confirmé(s)</h4>
                                <div className="case_number case_number_confirmed">{this.state.confirmed}</div>
                            </div>
                            <div className="case">
                                <h4>Retabli(s):</h4>
                                <div className="case_number case_number_recovered">{this.state.recovered}</div>
                            </div>
                            <div className="case">
                                <h4>Mort(s):</h4>
                                <div className="case_number case_number_deaths">{this.state.deaths}</div>
                            </div>
                        </div>
                    </section>
                </div>
                
                <section className="outbreak">

                </section>
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