import React from "react";
import './styles/App.css'
import { Titulo } from  './components/Titulo';
import { CatalogoPelis } from './components/CatalogoPelis';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <header className="App">
        <Titulo/>
        <Link to={'/'}>Home</Link>
        <Link to={'/movie'}>Movie</Link>
      </header>
      <main>
      </main>
      <Switch>
          <Route exact path="/movie">Movie</Route>
          <Route path="/">Home</Route>
      </Switch>
    </Router>
  )
}

export default App;
