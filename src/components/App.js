// External dependencies
import React from "react";
// Internal dependencies
import "../style/main.scss";
import Overview from './Overview';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div id="App">
            <Overview />
        </div>
        );
    }
}