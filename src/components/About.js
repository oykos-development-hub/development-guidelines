import React from "react";

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div id="About" className="bg-theme-main-5 light-3">
            
            <h1>{this.props.text}</h1>
          
            
        </div>);
    }
}

