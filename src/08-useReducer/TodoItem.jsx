import React from 'react'

export const TodoItem = ( {description, done, id, deleteTodo, handleTodo } ) => {
    return (
        <>
                <li className='list-group-item d-flex justify-content-between' key={id} >
                    <span className='align-self-center'>{ description } </span>
                    <button className='btn btn-danger' onClick={() => deleteTodo(id) }>Borrar</button>
                    <button className='btn btn-danger justify-content-center' onClick={() => handleTodo(id, done) }>Hecho</button>
                </li>
        </>
    )
}
