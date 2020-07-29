import React from "react";

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div id="Dashboard" className="bg-theme-main-3 light-1">
            
        <h1>{this.props.text}</h1>
          
            
        </div>);
    }
}
