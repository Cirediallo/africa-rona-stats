import CountryTyes from '../types/index'
import {GN_URL} from '../../util/urls';

export const getGnData = () => async dispatch => {
  const { GET_DATA_GN,DATA_FAILED } = CountryTyes;       
        fetch(GN_URL)
        .then(response => response.json())
        .then(data => dispatch({
            type: GET_DATA_GN,
            payload: data
          }))
        .catch(error => dispatch({
            type: DATA_FAILED,
            payload: error
          })
        );
}
  
export const getData = country => async dispatch => {
  const { GET_DATA,DATA_FAILED } = CountryTyes;       
        fetch(`https://covid19.mathdro.id/api/countries/${country}`)
        .then(response => response.json())
        .then(data => dispatch({
            type: GET_DATA,
            payload: data
          }))
        .catch(error => dispatch({
            type: DATA_FAILED,
            payload: error
          })
        );
}
  

  