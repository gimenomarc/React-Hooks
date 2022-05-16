import React from 'react';
import '../Styles/Button.css'

function Boton ({ text, onClick, cssClass }) {
    return (
        <button 
        className= { cssClass ? 'btn_clic' : 'btn_reinicio' }
        onClick={onClick}>
            {text}
        </button>
    );
}

export default Boton;