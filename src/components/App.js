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
            </Switch>
        </Router>);
    }
}