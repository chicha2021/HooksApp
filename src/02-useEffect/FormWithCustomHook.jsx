import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;
  
    return (
        <>
            <h1>Formulario con custom Hook</h1> 
            <hr />

            <input 
                type="text" 
                classNameName="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            <input 
                type="email" 
                classNameName="form-control mt-2"
                placeholder="fernando@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
            <input 
                type="password" 
                classNameName="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />
            <button onClick={ onResetForm } classNameName="btn btn-primary mt-2">Borrar</button>
        </>
    )
}