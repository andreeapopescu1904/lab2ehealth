import './App.css';
import Home from './pages/Home';
import Persoana from './pages/Persoana';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
		return (
      <Router>
        <Switch>
				<Route exact path="/"><Home/></Route>
        <Route exact path="/persoana/:id"><Persoana/></Route>
        </Switch>
      </Router>
			
    )
  }

export default App;
