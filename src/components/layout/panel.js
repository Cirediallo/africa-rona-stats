import React from 'react'
import Form from 'react-bootstrap/Form';
import moment from 'moment';

const Panel = ({label, value, headClassName, bodyClassName}) => {
    return (
        <div className="col-xs-1 col-md-3" >
            <div className="card mb-4 shadow-sm">
                <div className={`card-head  ${ headClassName } text-white`}>
                    <h3 className="card-text" className="text-center">{label}</h3>
                </div>
                <div className="card-body">
                    <h3 className="card-text" className={`text-center ${ bodyClassName }`}>{value}</h3>
                    <br></br>
                </div>
            </div>
        </div>
    )
}
export default Panel;