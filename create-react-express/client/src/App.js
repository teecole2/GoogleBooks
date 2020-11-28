import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/NavBar";
import Search from "./pages/search";
import Saved from "./pages/saved";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/saved" component={Saved}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
