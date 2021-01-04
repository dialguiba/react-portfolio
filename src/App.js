import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
/* import SignUp from "./components/pages/SignUp"; */
import Articles from "./components/pages/Articles";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/articles" component={Articles} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
