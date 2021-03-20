import React, { useState,useEffect } from 'react';
import {
  selectDataLoadingState,
  selectData
} from "../redux/selectors";
import countries from '../util/countries'
import Form from 'react-bootstrap/Form';
import Panel from './layout/panel';
import moment from 'moment';
import { getData } from "../redux/actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";


const Country = ({data, getData, africaData,africaDataLoading}) => {

  const handleChange = e => {
    africaData = getData(e.target.value);
  }

  useEffect(() => {
    getData('DZ');

  }, [getData]);


  if (data){
    return(
    <main className="container-fluid">
        <h2 className="text-center text-dark">Informations sur le cas du Covid-19 en Afrique</h2><br></br>
        <h6 className="text-right text-dark">Dernière mise à jour: {moment().format('MMMM Do YYYY, h:mm:ss a')}</h6>
        <div className="container">
        <h4 className="text-left text-dark">Éclosion en Guinée:</h4><br></br>
        <div className="row justify-content-md-center">
          <Panel label='Cas recensés' value={data.confirmed.value} headClassName='bg-info' bodyClassName='text-info'/>
          <Panel label='Guéris' value={data.recovered.value} headClassName='bg-success' bodyClassName='text-success'/>
          <Panel label='Décès' value={data.deaths.value} headClassName='bg-danger' bodyClassName='text-danger'/>
       </div>
        </div>
        <br></br>                  
        <div className="container">
        <h4 className="text-left text-dark">Les autres pays :</h4><br></br>
        <Form className="row justify-content-md-center">  
        <div className="form-inline my-2 my-lg-0">
            <Form.Label className="mr-sm-2"><h4>Selectionnez un pays:</h4></Form.Label>
            <Form.Control as="select" size="sm" custom onChange={handleChange} >
            {Object.entries(countries).map(
                ([country, code]) => (
                    <option key={code} value={code}>{country}</option>
                )
                )}
            </Form.Control>
        </div>
        </Form> 
        <br></br>
        <div className="row justify-content-md-center">

          {!africaDataLoading &&
          <>
          <Panel label='Cas recensés' value={africaData.confirmed.value} headClassName='bg-info' bodyClassName='text-info'/>
            <Panel label='Guéris' value={africaData.recovered.value} headClassName='bg-success' bodyClassName='text-success'/>
            <Panel label='Décès' value={africaData.deaths.value} headClassName='bg-danger' bodyClassName='text-danger'/>
          
          </>
         }
         
        </div>
  
        </div>  
            <br></br>
            <p className="row justify-content-md-end">Sources de données <a href="https://github.com/mathdroid/covid-19-api" target="_blank" rel="noopener noreferrer">Muhamed Mustadi</a></p>
    </main>
    )} else {
      return (null)
    }
}

const mapStateToProps = createStructuredSelector({
  africaData: selectData,
  africaDataLoading: selectDataLoadingState
});

export default connect(mapStateToProps, { getData })(Country);
