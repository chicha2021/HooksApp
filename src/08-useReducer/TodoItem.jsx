import React from 'react'

export const TodoItem = ( {description, done, id, deleteTodo, handleTodo } ) => {
    return (
        <>
                <li classNameName='list-group-item d-flex justify-content-between' key={id} >
                    <span classNameName='align-self-center'>{ description } </span>
                    <button classNameName='btn btn-danger' onClick={() => deleteTodo(id) }>Borrar</button>
                    <button classNameName={done ? 'btn btn-success' : 'btn btn-danger'} onClick={() => handleTodo(id, done) }>{done ? 'Hecho' : 'Pendiente'}</button>
                </li>
        </>
    )
}
