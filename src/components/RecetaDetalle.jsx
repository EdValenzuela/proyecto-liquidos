import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const RecetaDetalle = () => {

    const { id } = useParams();
    const [results, setResults] = useState([])

    useEffect(() => {
        const getDetails = async()=>{
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
                const resp = await fetch(url);
                const {drinks} = await resp.json();
                setResults(drinks);
                //console.log(drinks);
            } catch (error) {
                console.log(error);
            }
        }
        getDetails();
    }, [id])

    //console.log(id);

    return (
        <>
        <h1 className="text-uppercase my-5">detalle del producto </h1>
        <div className="row d-flex justify-content-center mr-0 ml-0">
            
            {
                results.map( ({idDrink, strDrink, strCategory, strDrinkThumb, strInstructions}) => (
                    <div key={idDrink} className="jumbotron col-md-4">
                        <h1 className="display-4">{strDrink}</h1>
                        <p className="lead">{strCategory}</p>
                        <hr className="my-4" />
                        <p>{strInstructions}</p>
                        
                        <div className="cont-img my-5">
                            <img className="Detail__poster Detail__poster_blured" src={strDrinkThumb} alt={strDrink}/>
                            <img src={strDrinkThumb} className="Detail__poster d-block m-auto" alt={strDrink}/>
                        </div>
                        
                        <Link className="btn btn-secondary btn-lg m-auto d-block" to='/'> Volver</Link>
                    </div>
                ))

            }
            
        </div>
        </>
    )
}

export default RecetaDetalle
