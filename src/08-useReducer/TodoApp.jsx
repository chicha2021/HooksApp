import React, { useReducer } from 'react'
import { todoReducer } from './todo-reducer'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

const initialState = [
    {
        id: 1231231,
        description: "Ir al super",
        done: false,
    },
    {
        id: 234234,
        description: "Ir a la facu",
        done: false,
    }
];


export const TodoApp = () => {
    
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const addNewTodo = ( todo ) => { 
        console.log( todo )
        // dispatch(state, addTodoAction);
    };

    return (
        <div>
            <h1>Hooks App</h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                <TodoList state={ state } />
                </div>
                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd addTodo={( todo ) => addNewTodo( todo ) }/>
                </div>
            </div>
        </div>
    );
};
