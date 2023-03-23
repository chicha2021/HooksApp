import React from 'react'

export const TodoItem = ( {description, done, id, deleteTodo, handleTodo } ) => {
    return (
        <>
                <li className='list-group-item d-flex justify-content-between' key={id} >
                    <span className='align-self-center'>{ description } </span>
                    <button className='btn btn-danger' onClick={() => deleteTodo(id) }>Borrar</button>
                    <button className={done ? 'btn btn-success' : 'btn btn-danger'} onClick={() => handleTodo(id, done) }>{done ? 'Hecho' : 'Pendiente'}</button>
                </li>
        </>
    )
}
