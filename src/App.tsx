import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import FirstPage from './components/FirstPage'
import Tape from "./components/Tape";
import Place from "./components/Place";
import AddPlace from "./components/AddPlace";
import Login from "./components/Login";
import ExamplePage from "./components/ExamplePage";
import PersonalOffice from "./components/PersonalOffice";
import {Provider} from 'react-redux'
import initStore from './store'

const App: React.FC = () => {
  return (
      <Provider store={initStore()}>
            <Router>
              <Route path="/" exact component={FirstPage} />
              <Route path="/Tape/" component={Tape} />
              <Route path="/Place/" component={Place} />
              <Route path="/AddPlace/" component={AddPlace} />
              <Route path="/Login/" component={Login} />
              <Route path="/FirstPage/" component={FirstPage} />
              <Route path="/PersonalOffice/" component={PersonalOffice} />
              <Route path="/ExamplePage/" component={ExamplePage} />
            </Router>
      </Provider>

  );
}

export default App;
