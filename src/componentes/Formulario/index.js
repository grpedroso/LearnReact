import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import './formulario.css'
import { useState } from 'react'


const Formulario = (props) => {

    
    const [nome, setNome] = useState('')
    const [classe, setClasse] = useState('')
    const [imagem, setImagem] = useState('')
    const [rota, setRota] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.campeaoRegistrado({
            nome,
            classe,
            imagem,
            rota
        })
        setNome('')
        setClasse('')
        setClasse('')
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados do campeão</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder='Digite o nome' 
                    valor ={nome}
                    aoAlterado = {valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Classe" 
                    placeholder='Digite a classe do campeão' 
                    valor ={classe}
                    aoAlterado = {valor => setClasse(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder='Digite o link da imagem'
                    valor ={imagem}
                    aoAlterado = {valor => setImagem(valor)} 
                />
                <ListaSuspensa 
                    label="Rota/Lane" 
                    itens={props.rota}
                    valor = {rota}
                    aoAlterado = {valor => setRota(valor)}
                />

                <Botao texto="Adicionar" />
            </form>
        </section>
    )
}
export default Formulario