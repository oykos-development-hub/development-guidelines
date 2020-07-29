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



 import About from "./About";
 import Stats from "./Stats";
 import Dashboard from "./Dashboard";

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

                <Route exact path="/about">
                    <About text="ABOUT" />
                </Route>

                <Route exact path="/stats">
                    <Stats text="STATS" />
                </Route>

                <Route exact path="/dashboard">
                <Dashboard text="DASHBOARD"/>
                </Route>


            </Switch>
        </Router>);
    }
    
}
//***************** PRVI NACIN-KAO SA SAJTA *************
    // function About() {
    //     return <h2 className="uppercase bg-theme-main-1 light-1">About</h2>;
    //   }
      
    //   function Stats() {
    //     return <h2 className="uppercase bg-theme-main-3 light-2">Stats</h2>;
    //   }

    //   function Dashboard() {
    //     return <h2 className="uppercase bg-theme-main-2 h-30 w-50perc">Dashboard</h2>;
    //   }