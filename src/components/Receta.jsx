import React from 'react';
import { Link } from 'react-router-dom';

const Receta = ({receta}) => {
    return (
        <div className="col-6 col-sm-6 col-md-3 col-lg-3 mb-5">
            
                <div className="card bg-dark">
                    <h6 className="card-header text-uppercase text-warning">
                        {receta.strDrink}
                    </h6>
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
