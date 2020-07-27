// External dependencies
import React from "react";


export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="About" className="flex-column">
        
         <h3>{this.props.text}</h3>


        </div>);
    }
}