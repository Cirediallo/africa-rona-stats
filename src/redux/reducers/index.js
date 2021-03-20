import countryTyes from '../types/index'

const initialState = {
    data:{},
    dataGn:{},
    loading: true,
    loadingGn: true,
    error: {}
};

export default function(state = initialState, action) {
    const {type, payload} = action;

    const {
        GET_DATA,
        GET_DATA_GN,
        CLEAR_DATA
    } = countryTyes

    switch (type) {
    case GET_DATA:
      return {
        ...state,
        data:payload,
        loading: false
      };
    case GET_DATA_GN:
      return {
        ...state,
        dataGn:payload,
        loadingGn: false
      };
    case CLEAR_DATA:
      return {
        ...state,
        data: null,
        loading: false
      };

    default:
      return state;
  }

}  
