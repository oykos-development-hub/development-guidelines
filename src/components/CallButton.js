import React from "react";
export default class CallButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div id="CallButton">
                  <button className="font-size-18 border-radius-8 bg-info-2 h-350 w-70 color-light-5 pointer" onClick={()=>{alert("Pozovi!")}}>{this.props.text}</button>
        </div>);
    }
}