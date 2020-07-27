// External dependencies
import React from "react";
import Dashboard from "./Dashboard";
import Stats from "./Stats";
import About from "./About"


export default class Practise extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="practise" className="flex-column">
            <div id="header" className="row center border-b-1 padding-v-40 margin-h-30 large-text bold">
                Practise Page
            </div>

            <div id="mainPage">
            <Dashboard text="Marko" />
            <Stats text="Oykos Development" />
            <About text="React" />

            </div>
        </div>);
    }
}