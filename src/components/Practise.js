// External dependencies
import React from "react";
import Image from "./Image";
import Login from "./Login";
import Button from "./Button"
import { FaPhoneVolume } from "react-icons/fa";

export default class Practise extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="practise" className="flex-column">
            <div id="header" className="row center border-b-1 padding-v-40 margin-h-30 large-text bold">
                Practise Page
            </div>

            <div id="mainPage" className="column align-stretch margin-v-40 margin-h-30">
                <div id="wrapper" className="flex flex-start align-stretch border-1 padding-5 bg-light-4">
                    <div id="picture-section">
                        <Image imgUrl="main-bg.jpg" />
                    </div>
                    <div id="right-section" className="flex w-100perc padding-l-20 bg-light-5 border-radius-tr-8">
                        <div className="column margin-t-50 w-100perc">
                            <Login
                                ime="Davor Popovic"
                                poslednjiPoziv="N/A"
                                poslednjeAzuriranje="N/A"
                                baterijaTelefona="N/A"
                                baterijaSata="N/A"
                                telefon="069069069"
                                email="davor.popovic@gmail.com"
                            />
                            <div id="button-wrapper" className="flex space-around">
                                <div className="column center">
                                    <p className="font-18 bolder padding-v-20">Detaljnije</p>
                                    <Button text="biometrija" bgcolor="bg-important-2" />
                                </div>
                                <div className="column center">
                                    <p className="font-18 bolder padding-v-20">Detaljnije</p>
                                    <Button text="podsjetnici" bgcolor="bg-theme-main-2" />
                                </div>
                                <div className="column center">
                                    <p className="font-18 bolder padding-v-20">Detaljnije</p>
                                    <Button text="zdravstveni karton" bgcolor="bg-theme-main-2" />
                                </div>
                            </div>
                        </div>
                        <div id="poziv" className="w-80 h-100perc bg-info-2 margin-l-20 flex center  border-radius-tr-8">
                            <div className="flex center light-5 " style={{ transform: 'rotate(90deg)' }}>
                                <p className="font-20">Pozovi</p>
                                <span className="font-24" style={{ transform: 'rotate(180deg)'}}><FaPhoneVolume/></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>);
    }
}