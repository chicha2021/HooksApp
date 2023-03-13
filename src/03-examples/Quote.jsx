import React from 'react'

export const Quote = ( {name, species, image}) => {
    return (
        <blockquote className="blockquote text-center">
            <p className="mb-1">{ name }</p>
            <footer className="blackquote-footer">{ species }</footer>
            <img src={ image } alt="Foto" />
        </blockquote>
    )
};
