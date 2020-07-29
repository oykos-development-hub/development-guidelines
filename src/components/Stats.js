import React from "react";

export default class Stats extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div id="Stats" className="border-1 margin-50 text-center">
            
            <h1>{this.props.text}</h1>
          
            
        </div>);
    }
}