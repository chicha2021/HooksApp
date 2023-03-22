import React from 'react'
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ addTodo }) => {
    const newTodo = {
        id: Math.random() + 100,
        todo: "",
        done: false
    };
    const { formState, onInputChange, onResetForm } = useForm(newTodo);
    const { todo } = formState;

    const onSubmit = (e) => {
        e.preventDefault();
        if (todo.length < 1) return;
        addTodo(formState);
        onResetForm(e);
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder='¿Qué hay que hacer?' value={todo} name={"todo"} onChange={onInputChange} className='form-control' />
                <button type='submit' className='btn btn-outline-primary mt-4'>Agregar</button>
            </form>
        </>
    )
}
