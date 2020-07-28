// External dependencies
import React from "react";
import Login from "./Login";
import Button from "./Button";
import CallButton from "./CallButton";
import Image from "./Image.js"
export default class Practise extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div id="practise" className="flex-column">
            <div id="header" className="row center padding-v-40 margin-h-30 large-text bold">
            
            </div>
            <div id="mainPage">
               <div id="wrapper" className="flex w-90perc margin-l-50-i h-350 w-90perc center bg-light-4 border-1 border-radius-top-left-6 border-radius-top-right-6 row padding-t-20 padding-b-20">
                   <div id="picture">
                   <Image />
                   </div>
               <div id="loginForm" className="column">
                   <Login />
               
               <div id="threeButtons" className="row w-960 margin-left-50-i">
                  <Button text="Biometrija" id="1"  bgcolor="bg-important-2 " />
                  <Button text="Podsjetnici " id="2" bgcolor="bg-theme-main-2 " />
                  <Button text="Zdravstveni karton" id="3" bgcolor="bg-theme-main-2 " />
                  </div>
                  
               </div>
               
                   <CallButton text="Pozovi"/>
               
            </div>
        </div>)
    </div>)
    }
}