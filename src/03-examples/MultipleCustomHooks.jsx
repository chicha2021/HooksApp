import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';
import { Loading } from './Loading';
import { Quote } from './Quote';

export const MultipleCustomHooks = () => {
    const { counter, increment, decrement } = useCounter(1);
    const { data, loading, error } = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`);
    const { name, species, image } = !!data && data;


    return (
        <div>
            <h1>Ricky & Morty Quotes</h1>
            <hr />
            {
                loading
                    ? <Loading />
                    : <Quote name={name} species={species} image={image} />
            }
            <div classNameName="text-center">
                <button classNameName="btn btn-primary" onClick={() => decrement()} disabled={loading}>
                    Prev character
                </button>
                <button classNameName="btn btn-primary" onClick={() => increment()} disabled={loading}>
                    Next character
                </button>
            </div>
        </div>
    )
}
