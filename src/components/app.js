import React, { useEffect } from "react";
import {
    selectGnDataLoadingState,
    selectGnData
} from "../redux/selectors";
import { createStructuredSelector } from "reselect";
import Header from './header'
import Footer from './footer';
import Country from './country'
import { connect } from 'react-redux'
import { getGnData } from '../redux/actions'


import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'

const App = ({ getGnData, data, dataLoading }) => {

    useEffect(() => {
        getGnData('GN');
      }, [getGnData]);
 
    return dataLoading ||  data === null ? (
        (null)
        
      ) : (
        <div className="container-fluid page">
            <Header />
            <Country data={data}/>
            <hr />
            <Footer />
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    data: selectGnData,
    dataLoading: selectGnDataLoadingState
  });

  
  export default connect(
      mapStateToProps,
     { getGnData }
)(App);
