import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
    
    const { counter, increment, decrement, reset } = useCounter();


    return (
        <>
            <h1>Counter with Hook: { counter }</h1>
            <hr />

            <button onClick={ () => increment(2) } classNameName="btn btn-primary">+1</button>
            <button onClick={ reset } classNameName="btn btn-primary">Reset</button>
            <button onClick={ () => decrement(2) } classNameName="btn btn-primary">-1</button>
        
        </>
    )
}