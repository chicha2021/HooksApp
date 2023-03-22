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
            <blockquote ref={ pRef } className="blockquote text-center">
                <p className="mb-1">{ name }</p>
                <footer className="blackquote-footer">{ species }</footer>
                <img src={ image } alt="Foto" />
            </blockquote>
            {/* <code>{ JSON.stringify(boxSize) }</code> */}
        </>
    )
};

