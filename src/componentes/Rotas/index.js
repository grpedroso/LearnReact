import Campeao from '../Card'
import './Rotas.css'

const Rota = (props) => {
    return(
        (props.campeoes.length > 0) 
        && 
        <section className='rota' style={{backgroundColor: props.corSecundaria}} >
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='campeoes'>
                 {props.campeoes.map(campeao => <Campeao nome={campeao.nome} classe={campeao.classe} imagem ={campeao.imagem}/>)}
            </div>
        </section>
    )
}
export default Rota