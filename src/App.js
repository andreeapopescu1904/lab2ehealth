import './App.css';
import Home from './pages/Home'
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
		return (
      <Router>
        <Switch>
				<Route exact path="/"><Home/></Route>
        </Switch>
      </Router>
			
    )
  }

export default App;
