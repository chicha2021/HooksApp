import React from 'react'
import { TodoItem } from './TodoItem'


export const TodoList = ({ state, deleteTodo, handleTodo }) => {
    return (
        <ul classNameName='list-group'>
            {
                state?.map(({ id, description, done }, ix) => (
                    <TodoItem
                        key={ix}
                        id={id}
                        description={description}
                        done={done}
                        deleteTodo={deleteTodo}
                        handleTodo={handleTodo}
                    />
                ))
            }
        </ul>
    )
}
