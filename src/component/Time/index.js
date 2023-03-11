import './Time.css'

//pegando esse parametro PROPS de APP.js passando estilos com a props em diversos componentes especificos
const Time = (props) =>{
    return(
        <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}> {props.nome} </h3>
        </section>
    )
}

export default Time;