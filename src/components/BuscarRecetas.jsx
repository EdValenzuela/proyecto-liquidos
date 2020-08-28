import React, { useState } from 'react'
import ErrorInput from './ErrorInput';

const BuscarRecetas = ({buscar, setBuscar}) => {

    const [error, setError] = useState(false);
    
    const handleSubmit = e =>{
        e.preventDefault();
        if(buscar.trim() === ''){
            console.log('cambpo buscar vacio !!!');
            setError(true);
            return;
        }
        setError(false); //Reinicio mi bandera
        setBuscar(buscar = '');
    }

    const handleChange = e =>{
        setBuscar(e.target.value.toLowerCase()); 
        setError(false);
    }

    return (
        <div className="row justify-content-center mb-5">
            <div className="col-10">
                <form onSubmit={handleSubmit}>
                    <input 
                        className="form-control form-control-lg mb-3" 
                        type="text" 
                        placeholder="Buscar por nombre"
                        name="buscar"
                        value={buscar}
                        onChange={handleChange}
                    />
                    { error && (<ErrorInput mensaje="Escriba un nombre del liquido!" />) }
                </form>
            </div>
        </div>
    )
}

export default BuscarRecetas
