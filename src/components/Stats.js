// External dependencies
import React from "react";


export default class Stats extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="Stats" className="flex-column">
        
         <h2>{this.props.text}</h2>


        </div>);
    }
}