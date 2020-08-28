import React, { useContext, useState } from 'react';
import { RecetaContext } from '../context/RecetasContext';
import Receta from './Receta';
import BuscarRecetas from './BuscarRecetas';

const RecetasItem = () => {

    const { recetas } = useContext(RecetaContext);
    const [buscar, setBuscar] = useState('');
    
    const query= recetas.filter(item => { 
        return (buscar !== '') ? item.strDrink.toLowerCase().includes(buscar) : recetas 
    })

    //console.log(recetas);

    return (
        <>
        {
            (recetas.length !== 0) ? (<BuscarRecetas buscar={buscar} setBuscar={setBuscar} />) : null
        }
        <div className="row">
            { 
                query.map(receta => (
                    <Receta   
                        key={receta.idDrink}
                        receta={receta}
                    />
                ))
            }
        </div>
        </>
    )
}

export default RecetasItem
