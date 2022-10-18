import './styles/App.css'
import { Titulo } from  './components/Titulo';
import { CatalogoPelis } from './components/CatalogoPelis'

function App() {
  return (
    <div className="App">
      <Titulo/>
      <CatalogoPelis/>
    </div>
  )
}

export default App;
