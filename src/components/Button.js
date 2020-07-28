// External dependencies
import React from "react";
export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div id="Button" className="flex space-around w-960">
            
            <button  className="padding-15 font-size-18 border-radius-8 bg-important-2 color-light-4 pointer margin-t-10" onClick={()=>{alert("Biometrija!")}}>BIOMETRIJA</button>
            <button  className="padding-15 font-size-18 border-radius-8 bg-theme-main-2 color-light-4 pointer margin-t-10" onClick={()=>{alert("Podsjetnici!")}}>PODSJETNICI</button>
            <button  className="padding-15 font-size-18 border-radius-8 bg-theme-main-2 color-light-4 pointer margin-t-10" onClick={()=>{alert("Zdravstveni karton!")}}>ZDRAVSTVENI KARTON</button>
        </div>);
    }
}