import React from 'react'

const RecetasCategorias = ({categorias, hanbleInputChange}) => {
    return (
        <div>
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
    )
}

export default RecetasCategorias
