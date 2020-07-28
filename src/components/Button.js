// External dependencies
import React from "react";
export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div id="Button" >
            <div><h4 className="font-size-20 margin-l-15 margin-t-10 margin-b-5 ">Detaljnije</h4></div>
        <button  className={"padding-15 font-size-18 border-radius-8 color-light-4 pointer margin-t-10 " + this.props.bgcolor}  onClick={()=>{alert(this.props.text)}}>{this.props.text}</button>
        </div>);
    }
}