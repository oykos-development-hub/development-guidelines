// External dependencies
import React from "react";
import {UtilService} from "../services/util.service";
import Background from "../img/main-bg.jpg";
export default class Practise extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        // let leftSideDiv = UtilService.DOM.$createNode('div', {"id": "leftSideDiv", "className": "column center w-100perc"});
        // UtilService.DOM.$appendChild ('#mainPage', leftSideDiv);
        // let BackgroundImage = UtilService.DOM.$createNode ('div', {"id": "BackgroundImageDiv", "className": "relative flex center w-250 h-200 border-radius-6 background-size-cover bg-position-50-perc"});
        // UtilService.DOM.$appendChildToElement('#leftSideDiv', BackgroundImage);
        // BackgroundImage.style.backgroundImage=`url(${ Background })`;
        let wrapper =UtilService.DOM.$createNode('<div id="wrapper" class="bg-light-4 flex padding-h-5 padding-v-5"></div>');
        UtilService.DOM.$appendChild(mainPage,wrapper);
        let divBcg=UtilService.DOM.$createNode('<div id="divBcg" class="h-300 w-250 background-size-cover"></div>');
        UtilService.DOM.$appendChild(wrapper,divBcg);
        divBcg.style.backgroundImage=`url(${ Background })`;
        let mainDiv = UtilService.DOM.$createNode ('<div id = "mainDiv" class="w-100perc column bg-light-5"></div>');
        UtilService.DOM.$appendChild(wrapper, mainDiv);
        let firstRow = UtilService.DOM.$createNode('<div id="firstRow" class="flex h-50 space-around max-w-900 text-center margin-t-30"></div>');
        UtilService.DOM.$appendChild(mainDiv,firstRow);
        let leftSide = UtilService.DOM.$createNode('<div id="leftSide" class="w-300 border-r-1 border-right-light-3-i center flex-wrap"><h3 class="font-12 opacity-80">Ime i prezime</h3><p class="font-16 dark-1 opacity-80">Davor Popovic </p></div>');
        UtilService.DOM.$appendChild(firstRow, leftSide);
        let middleDiv = UtilService.DOM.$createNode ('<div id="middleDiv" class="border-r-1 border-light-3-i w-300 center flex-wrap"><h3 class="font-12 opacity-80">Poslednji poziv</h3><p class="font-16 dark-1 opacity-80">N/A</p></div>');
        UtilService.DOM.$appendChild(firstRow, middleDiv);
        let rightDiv = UtilService.DOM.$createNode('<div id="rightDiv" class="center w-300 flex-wrap"><h3 class="font-12 opacity-80">Poslednje azuriranje</h3><p class="font-16 opacity-80">N/A</p></div>');
        UtilService.DOM.$appendChild(firstRow,rightDiv);
        //srednji dio
        let secondRow = UtilService.DOM.$createNode('<div id="secondRow" class="flex margin-v-10 margin-h-15 h-55 space-around max-w-900 text-center border-v-1 border-light-3-i padding-v-5"></div>');
        UtilService.DOM.$appendChild(mainDiv, secondRow);
        let leftSideSR = UtilService.DOM.$createNode('<div id="leftsideSR" class="border-r-1 border-light-3-i w-200 center flex-wrap"><h3 class="font-12 opacity-80">Baterija telefona</h3><p class="font-16 dark-1 opacity-80">N/A</p></div>');
        UtilService.DOM.$appendChild(secondRow, leftSideSR);
        let middleSideSR = UtilService.DOM.$createNode('<div id="middleSideSR" class="border-r-1 border-light-3-i w-200 center flex-wrap"><h3 class="font-12 opacity-80">Baterija sata</h3><p class="font-16 dark-1 opacity-80">N/A</p></div>');
        UtilService.DOM.$appendChild(secondRow,middleSideSR);
        // let = UtilService.DOM.$createNode('<div id="thirdPartofSR" class="border-r-1 w-200 center flex-wrap"><h3 class="font-12">E-mail</h3><p class="font-16 dark-1">davorpopovic@gmail.com</p></div>');
        // UtilService.DOM.$appendChild(secondRow.rightSideSR);
        let thirdPartOfSecondRow = UtilService.DOM.$createNode('<div id="thirdPartOfSecondRow" class="border-r-1 border-light-3-i w-200 center flex-wrap"><h3 class="font-12 opacity-80">Telefon</h3><p class="font-16 dark-1 opacity-80">+38269069069</p></div>');
        UtilService.DOM.$appendChild(secondRow,thirdPartOfSecondRow);
        let fourthPartOfSecondRow= UtilService.DOM.$createNode('<div id="fourthPartOfSecondRow" class="text-center w-200 center"><h3 class="font-12 opacity-80">E-mail</h3><p class="font-16 dark-1 opacity-80">davorpopovic@gmail.com</p></div>');
        UtilService.DOM.$appendChild(secondRow,fourthPartOfSecondRow); 
        let thirdRow = UtilService.DOM.$createNode('<div id="thirdRow" class="flex-row margin-l-30 space-around max-w-800 text-center"></div>');
        UtilService.DOM.$appendChild(mainDiv,thirdRow);
        let firstPart= UtilService.DOM.$createNode('<div id="firstPart" class="center flex-wrap"><h3 class="font-16 opacity-70 padding-10">Detaljnije</h3><p class="font-18 bg-important-2 pointer border-radius-8 light-5 padding-10">BIOMETRIJA</p></div>');
        UtilService.DOM.$appendChild(thirdRow,firstPart);
        let secondPart = UtilService.DOM.$createNode('<div id="secondPart" class="center flex-wrap"><h3 class="font-16 opacity-70 padding-10">Detaljnije</h3><p class="font-18 border-radius-8 pointer bg-theme-main-2 light-5 padding-10">PODSJETNICI</p></div>');
        UtilService.DOM.$appendChild(thirdRow,secondPart);
        let thirdPart = UtilService.DOM.$createNode('<div id="thirdPart" class="center flex-wrap"><h3 class="font-16 opacity-70 padding-10">Detaljnije</h3><p class="font-18 pointer border-radius-8 bg-theme-main-2 light-5 padding-10">ZDRAVSTVENI KARTON</p></div>');
        UtilService.DOM.$appendChild(thirdRow,thirdPart);
        let greenButton = UtilService.DOM.$createNode('<div id="greenButton" class="flex font-12 pointer border-radius-r-4 bg-info-2 w-50 h-300"><p class="light-5 font-size-20 align-center flex rotate-1 padding-t-15">Pozovi</p></div>');
        UtilService.DOM.$appendChild(wrapper,greenButton);
    }
    render() {
        return (<div id="practise" className="flex-column">
            {/* <div id="header" className="row center border-b-1 padding-v-40 margin-h-30 large-text bold">
                Practise Page
            </div> */}
            <div id="mainPage" className="column align-stretch margin-v-40 margin-h-30">
            </div>
        </div>);
    }
}