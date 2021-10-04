import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import { Product } from "./pages/Product";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/product/:id" component={Product}></Route>
          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
