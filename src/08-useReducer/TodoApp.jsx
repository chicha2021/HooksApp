import React, { useEffect, useReducer } from 'react'
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
    
    const initStorage  = () => {
        return JSON.parse(localStorage.getItem('state')) || [];
    };
    const [state, dispatch] = useReducer(todoReducer, initialState, initStorage);
    
    const addNewTodo = ( todo ) => { 
        const action = {
            type: 'ADD_TODO',
            payload: todo
        };
        dispatch( action );
    };

    const deleteTodo = ( id ) => { 
        const action = {
            type: 'DELETE_TODO',
            payload: id
        };
        dispatch( action );
    };

    const handleTodo = ( id, done ) => {
        dispatch({
            type: 'HANDLE_TODO',
            payload: id, done
        });
    };

    useEffect(() => {
        console.log(localStorage.getItem('state'))
    }, []);

    useEffect(() => {
      localStorage.setItem('state', JSON.stringify( state ));
    }, [ state ]);
    
    return (
        <div>
            <h1>Hooks App</h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                <TodoList state={ state } deleteTodo={ deleteTodo } handleTodo={ handleTodo } />
                </div>
                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd addTodo={( todo ) => addNewTodo( todo )}/>
                </div>
            </div>
        </div>
    );
};
