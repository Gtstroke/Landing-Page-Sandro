import './App.css';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Elenco from './components/Elenco';
import Galeria from './components/GaleriaDeFotos';
import Rodape from './components/Rodape';
import Sobre from './components/Sobre';
import Titulos from './components/Titulos';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <main>
        <Sobre />
        <Galeria />
        <Elenco />
        <Titulos />
      </main>
      <Rodape />
    </div>
  );
}

export default App;