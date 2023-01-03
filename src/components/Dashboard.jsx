import React from 'react'

function dashboard(titulo, color, cifra, icono) {
    return (

        <div className="col-md-4 mb-4">
            <div className={`card ${color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{titulo}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{cifra}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${icono} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default dashboard


/* Uncaught Error: Objects are not valid as a React child (found: object with keys {}). 
If you meant to render a collection of children, use an array instead. */