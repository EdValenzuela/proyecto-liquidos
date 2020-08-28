import React, { useContext, useState } from 'react';

import { CategContext } from '../context/CategoriasContext';
import { RecetaContext } from '../context/RecetasContext';
import ErrorInput from './ErrorInput';
import RecetasCategorias from './RecetasCategorias';

const Form = () => {
    
    const { categorias } = useContext(CategContext);
    const { setBuscar, setDisponible } = useContext(RecetaContext);
    
    const [input, setInput] = useState({
        nombre: '',
        categoria: ''
    });

    const { nombre, categoria } = input;

    const [error, setError] = useState({
        errorInput : false,
        errorSelect : false
    });

    const hanbleInputChange = e =>{
        setInput({
            ...input,//Guardo el resultado anterior
            [e.target.name] : e.target.value
        }) 
    }

    const handleSubmit = e =>{
        e.preventDefault();

        if(nombre.trim() === ''){
            console.log('input vacio !');
            setError({
                errorInput: true
            })
            
            return;
        }
        if(!categoria){
            console.log('categoria select vacia !');
            setError({
                errorSelect: true
            });
            return;
        }
        setError({
            errorInput: false,
            errorSelect: false
        });
        setBuscar(input);

        //Valido que esta disponible para hacer el submit en context
        setDisponible(true);

        //Dejo mis campos limpios
        setInput({
            nombre: '',
            categoria:''
        })
    }

    return (
        <div className="row">
        <form 
            className="col-12"
            onSubmit={ handleSubmit }
            >
        
            <div className="row mb-5 align-items-center">
                <div className="col-md-4">
                    <input  
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Agregar ingrediente"
                        value={nombre}
                        onChange={ hanbleInputChange }
                    />
                </div>
                <div className="col-md-4 my-md-0 my-3">
                    <RecetasCategorias categorias={categorias} hanbleInputChange={hanbleInputChange}/>
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

            { error.errorInput && (<ErrorInput mensaje="Ingrese un ingrediente !"/>)}
            { error.errorSelect &&  (<ErrorInput mensaje="Seleccione una categoría !"/>)}
        </form>
        </div>
    )
}

export default Form
