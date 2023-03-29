import { useLayoutEffect, useRef, useState } from 'react';


export const Quote = ({ name, species, image }) => {
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })
    
    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width });
    
    }, [ name ]);
    
    return (
        <>
            <blockquote ref={ pRef } classNameName="blockquote text-center">
                <p classNameName="mb-1">{ name }</p>
                <footer classNameName="blackquote-footer">{ species }</footer>
                <img src={ image } alt="Foto" />
            </blockquote>
            {/* <code>{ JSON.stringify(boxSize) }</code> */}
        </>
    )
};

