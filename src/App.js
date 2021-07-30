import './App.css';
import Header from './component/header';
import MovieAll from './pages/MovieAll';
import MostValued from './pages/MostValued';
import LessValued from './pages/LessValued';
import Error404 from './pages/Error404';
import FormLogin from './pages/formLogin';
import FormRegister from './pages/formRegister';
import {
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";

  //Redirect,
  //BrowserRouter as Router, 

function App() {

 

  return (
    <>
    <div className="App">
     
      <HashRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={MovieAll}/>
          <Route exact path="/pelicula" component={MovieAll}/>
          <Route exact path="/mostValued" component={MostValued}/>
          <Route exact path="/lessValued" component={LessValued}/>
          <Route exact path="/login" component={FormLogin}/>
          <Route exact path="/register" component={FormRegister}/>
          <Route to="*" component={Error404}/>
        </Switch>
      </HashRouter>
    </div>
    </>
  );
}

export default App;
