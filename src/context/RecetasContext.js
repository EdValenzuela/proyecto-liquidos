import React, { createContext, useState, useEffect } from 'react';

export const RecetaContext = createContext();

const RecetasContext = (props) => {
    //Localstorage
    let recetasInit = JSON.parse(localStorage.getItem('recetas')) || [];
    
    const [recetas, setRecetas] = useState(recetasInit);
    const [buscar, setBuscar] = useState({
        nombre:'tequila',
        categoria:'Shot'
    })

    const {nombre, categoria} = buscar;
    const [disponible, setDisponible] = useState(false);  //Mi Bandera

    useEffect(() => {
        localStorage.setItem('recetas', JSON.stringify(recetas));
    }, [recetas]);
    
    useEffect(() => {
        try {
            if(disponible){
                const getRecetas = async () =>{
                    //capturo los ingredientes y categorias
                    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                    const resp = await fetch(url);
                    const {drinks} = await resp.json();
                    setRecetas(drinks);
                }
                getRecetas();
            }
        } catch (error) {
            console.log(error);
        }
    }, [buscar, categoria, disponible, nombre]);
    
    
    
    return (
        <RecetaContext.Provider
        value={{
            recetas, //resultados de la busqueda
            setBuscar, //parametros del form
            setDisponible //flag
        }}
        >
            {props.children}
        </RecetaContext.Provider>
    );
}

export default RecetasContext;
