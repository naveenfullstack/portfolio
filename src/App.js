import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "../src/App.css";
import PageNotFound from "./pages/PageNotFound";

/* IMPORT COMPORNENTS */
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} extend/>
        <Route component={PageNotFound} extend/>
      </Switch>
    </Router>
  );
}
