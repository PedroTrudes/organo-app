import './Time.css'
import Colaborador from '../Colaborador';

//pegando esse parametro PROPS de APP.js passando estilos com a props em diversos componentes especificos
const Time = (props) =>{
    return(
        (props.colaboradores.length > 0) ? 
        <section className='time' 
        style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}> {props.nome} </h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corFundo={props.corPrimaria}/>)} 
            </div>
        </section>
        : ''
    )
}

export default Time;