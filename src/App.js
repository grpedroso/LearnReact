
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto';
import Formulario from './componentes/Formulario';
import Rota from './componentes/Rotas';

function App() {

  const rotas = [
    {
      nome: 'TOP',
      corPrimaria: '#57C278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'JUNGLE',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'MID',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'ADC',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'SUP',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [campeoes, setCampeao] = useState([])

  const novoCampeaoRegistrado = (campeao) => {
    setCampeao([...campeoes, campeao])
    console.log(campeao)
  }

  return (
    <><div className="App">
      <Banner />
      <Formulario rota={rotas.map(rota => rota.nome)} campeaoRegistrado={campeao => novoCampeaoRegistrado(campeao)} />
      {rotas.map(rota => <Rota key={rota.nome}
        nome={rota.nome}
        corPrimaria={rota.corPrimaria}
        corSecundaria={rota.corSecundaria}
        campeoes={campeoes.filter(campeao => campeao.rota == rota.nome)} />)}
    </div><footer>Desenvolvido por Gabriel Pedroso</footer></>
  );
}

export default App;
