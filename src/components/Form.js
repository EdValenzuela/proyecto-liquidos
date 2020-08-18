import React, { useContext, useState } from 'react';

import { CategContext } from '../context/CategoriasContext';
import { RecetaContext } from '../context/RecetasContext';
import ErrorInput from './ErrorInput';

const Form = () => {
    
    const { categorias } = useContext(CategContext);
    const { setBuscar, setDisponible } = useContext(RecetaContext);
    
    const [input, setInput] = useState({
        nombre: '',
        categoria: ''
    });

    const [error, setError] = useState(false);

    const hanbleInputChange = e =>{
        setInput({
            ...input,//Guardo el resultado anterior
            [e.target.name] : e.target.value
        }) 
    }

    const handleSubmit = e =>{
        e.preventDefault();

        if(input.nombre.trim() === ''){
            console.log('input vacio !');
            setError(true);
            return;
        }
        if(!input.categoria){
            console.log('categoria select vacia !');
            setError(true);
            return;
        }
        setError(false);
        setBuscar(input);
        setDisponible(true);
    }

    return (
        <form 
            className="col-12"
            onSubmit={ handleSubmit }
            >
            <h2 className="text-center mb-5"> Buscar bebidas por ingredientes y categoría </h2>
        
            <div className="row mb-5">
                <div className="col-md-4">
                    <input  
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                        onChange={ hanbleInputChange }
                    />
                </div>
                <div className="col-md-4">
                    <select
                        onChange={hanbleInputChange}
                        className="form-control"
                        name="categoria"
                    >
                        <option value="">Selecciona Categoría</option>
                        {
                            categorias.map(item => (
                                <option 
                                    key={ item.strCategory }
                                    value={ item.strCategory }
                                    > 
                                    { item.strCategory }
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-md-4">
                    <button
                        type="submit"
                        className="btn btn-block btn-warning text-dark btn-lg"
                        >
                        Buscar Bebida
                    </button>
                </div>
            </div>

            { error ? <ErrorInput mensaje="Error detectado !"/> : null}
        </form>
    )
}

export default Form
