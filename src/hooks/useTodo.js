import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todo-reducer';


export const useTodo = ( ) => {

    const initStorage  = () => {
        return JSON.parse(localStorage.getItem('state')) || [];
    };
    const [state, dispatch] = useReducer(todoReducer, [], initStorage);

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

    const handleTodo = ( id ) => {
        dispatch({
            type: 'HANDLE_TODO',
            payload: id
        });
    };


    useEffect(() => {
        console.log(localStorage.getItem('state'))
    }, []);

    useEffect(() => {
      localStorage.setItem('state', JSON.stringify( state ));
    }, [ state ]);

    return {
        state,
        finishedTodos: state.filter((e) => e.done === true).length,
        pendingTodos: state.filter((e) => e.done === false).length,
        allTodos: state.length,
        addNewTodo,
        deleteTodo,
        handleTodo,
    };
};
