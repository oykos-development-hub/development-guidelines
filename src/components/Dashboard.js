// External dependencies
import React from "react";

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="Dashboard" className="flex-column">
            <h1>{this.props.text}</h1>
        </div>);
    }
}