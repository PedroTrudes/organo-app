import { useState } from 'react';
import './CampoTexto.css';
// passando um parametro para essa function lá app.js LABEL
const CampoTexto = (props) => {
    // pegando a props e tratando ela como uma variavel 
    const placeholderModificada = `${props.placeholder}...`
 
    const aoDigitado = ((evento) =>{
        props.aoAlterado(evento.target.value);
    })
    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/> 
        </div>
    )
}

export default CampoTexto;