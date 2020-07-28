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
               <div id="wrapper" className="flex h-350 w-100-perc center bg-light-4 border-2 border-radius-top-left-6 border-radius-top-right-6 row padding-t-20 padding-b-20">
                   <div id="picture">
                   <Image />
                   </div>
               <div id="loginForm" className="column">
                   <Login />
               <div id="threeButtons" className="flex space-around center">
                  <Button />
                </div>
                </div>
               
                <CallButton text="Pozovi"/>
               
            </div>
        </div>
    </div>)
    }
}