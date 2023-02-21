import './CampoTexto.css';
// passando um parametro para essa function lá app.js LABEL
const CampoTexto = (props) => {
    // pegando a props e tratando ela como uma variavel 
    const placeholderModificada = `${props.placeholder}...`
    console.log(props)
    //required sendo passado por props 
    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={placeholderModificada}/> 
        </div>
    )
}

export default CampoTexto;