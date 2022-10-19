import React from "react";
import './styles/App.css'
import { Titulo } from  './components/Titulo';
import { LandingPage } from './pages/LandingPage';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { MovieDetails } from './pages/MovieDetails';


  function App() {
  return (
    <Router>
      <header className="App">
        <Link to={'/'}><Titulo/></Link> 
 {/*        <Link to={'/'}>Home</Link>
        <Link to={'/movie'}>Movie</Link> */}
      </header>
      <main>
      </main>
      <Switch>
          <Route exact path="/movies/:movieId"> <MovieDetails/> </Route>
          <Route path="/"> <LandingPage/> </Route>
      </Switch>
    </Router>
  )
}

export default App;
