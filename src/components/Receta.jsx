import React from 'react';
import { Link } from 'react-router-dom';

const Receta = ({receta}) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card bg-dark">
                <h2 className="card-header text-uppercase text-warning">
                    {receta.strDrink}
                </h2>
                <img 
                    src={receta.strDrinkThumb} 
                    className="card-img-top img-fluid img-thumbnail" 
                    alt={receta.strDrink} 
                />
                <div className="card-body">
                    <Link to={`/detalle/${receta.idDrink}`}
                        className="btn btn-warning btn-block btn-lg text-dark">
                        ver más
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Receta
