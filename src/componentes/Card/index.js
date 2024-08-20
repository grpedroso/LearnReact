import './Card.css'

const Campeao = (props) => {
    return (<div className='campeao'>
        <div className='cabecalho'>
            <img src={props.imagem} alt='imagem do campeao' />
        </div>
        <div className='rodape'>
            <h4>{props.nome}</h4>
            <h5>{props.classe}</h5>
        </div>
      </div>
    )
}

export default Campeao