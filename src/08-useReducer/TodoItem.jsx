import React from 'react'

export const TodoItem = ( {description, done, id} ) => {
    return (
        <>
                <li className='list-group-item d-flex justify-content-between' key={id} >
                    <span className='align-self-center'>{ description } </span>
                    <button className='btn btn-danger'>Borrar</button>
                </li>
        </>
    )
}
