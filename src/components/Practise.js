// External dependencies
import React from "react";
import Login from "./Login";
import Button from "./Button";
import CallButton from "./CallButton";
import Image from "./Image";

export default class Practise extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="practise" className="flex-column">
            <div id="mainPage" className="column align-stretch bg-light-1">



               <div id="wrapper" className="margin-l-100 margin-t-100 border-radius-top-left-8 border-radius-top-right-6 h-400 row margin-v-20 margin-h-10 padding-30-i">

                   <div id="pictureSection" >
                   <Image />
                   </div>

               <div id="loginForm" className=" bg-light-5 w-70perc column padding-v-60 padding-h-20">
                   <Login />

               <div id="threeButtons" className="h-100 flex space-around center">
                  <Button text="Biometrija" id="1" bgcolor="bg-important-2"/>
                  <Button text="Podsjetnici " id="2"  bgcolor="bg-theme-main-2" />
                  <Button text="Zdravstveni karton" id="3" bgcolor="bg-theme-main-2"/>
                  </div>

               </div>
                    <div id="greenSection" className="border-radius-top-right-6 bg-info-3 w-5perc column center">
                   <CallButton text="pozovi"/>
                   </div>
            </div>




        </div>)
    </div>)
    }
}