import CampoTexto from "../CampoTexto"
import './formulario.css'
const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2> Preencha os dados do campeão</h2>
                <CampoTexto label="Nome" placeholder='Digite seu nome' />
                <CampoTexto label="Rota" placeholder='Digite sua rota' />
                <CampoTexto label="Imagem" placeholder='Digite o link da imagem' />
            </form>
        </section>
    )
}
export default Formulario