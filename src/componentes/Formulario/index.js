import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import './formulario.css'

const Formulario = () => {

    const rotas = [
         'TOP',
         'JUNGLE',
         'MID',
         'ADC',
         'SUP'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Form submetido')
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados do campeão</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder='Digite o nome' />
                <CampoTexto obrigatorio={true} label="Classe" placeholder='Digite a classe do campeão' />
                <CampoTexto obrigatorio={true} label="Imagem" placeholder='Digite o link da imagem' />
                <ListaSuspensa label="Rota/Lane" itens={rotas}/>
                <Botao texto="Adicionar" />
            </form>
        </section>
    )
}
export default Formulario