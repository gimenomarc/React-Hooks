import React from 'react';
import '../Styles/Button.css'

function Boton ({ text, onClick }) {
    return (
        <button className='btn' onClick={onClick}>
            {text}
        </button>
    );
}

export default Boton;