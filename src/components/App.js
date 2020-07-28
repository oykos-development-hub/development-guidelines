// External dependencies
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
// Internal dependencies
import "../style/main.scss";
import Overview from './Overview';
import OverviewJS from "./OverviewJS";
import Practise from "./Practise";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Router>
            <Switch>
                <Route exact path="/practise">
                    <Practise />
                </Route>

                <Route exact path="/js">
                    <OverviewJS/>
                </Route>

                <Route exact path="/css">
                    <Overview/>
                </Route>

                <Route exact path="/">
                    <Overview/>
                </Route>
                <Route exact path="/ab">
                    <About/>
                </Route>

                <Route exact path="/ds">
                    <Dashboard/>
                </Route>

                <Route exact path="/st">
                    <Stats/>
                </Route>
            </Switch>
        </Router>);
    }
    
}
function About() {
    return <h2>Marko Djikanovic</h2>;
  }
  function Dashboard() {
    return <h2>Oykos Development</h2>;
  }
  function Stats() {
    return <h2>Programming</h2>;
  }