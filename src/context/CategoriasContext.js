import React, { createContext, useState, useEffect } from 'react';

export const CategContext = createContext();

const CategoriasContext = (props) => {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const getCategorias = async ()=>{
            try {
                const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
                const resp = await fetch(url);
                const {drinks} = await resp.json();
                setCategorias(drinks);
            } catch (error) {
                console.log(error)
            }
        }
        getCategorias();
    }, [])

    return (
        <CategContext.Provider value={{ categorias }}>
            {props.children}
        </CategContext.Provider>
    )
}

export default CategoriasContext
