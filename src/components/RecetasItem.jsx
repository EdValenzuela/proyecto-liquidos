import React, { useContext } from 'react';
import { RecetaContext } from '../context/RecetasContext';
import Receta from './Receta';

const RecetasItem = () => {

    const { recetas } = useContext(RecetaContext);
    console.log(recetas);

    return (
        <div className="row mt-5">
            {
                recetas.map(receta => (
                    <Receta   
                        key={receta.idDrink}
                        receta={receta}
                    />
                ))
            }
        </div>
    )
}

export default RecetasItem
