// External dependencies
import React from "react";
import {UtilService} from "../services/util.service";
import Background from '../img/main-bg.jpg';


export default class Practise extends React.Component {
    constructor(props) {
        super(props);
    }

         componentDidMount() {
         //div (firstRow) which contains three columns but before it we need to insert img
     
         let wrapper =UtilService.DOM.$createNode('<div id="wrapper" class="bg-light-4 flex margin-auto"></div>');
         UtilService.DOM.$appendChild(mainPage,wrapper);
         let divBcg=UtilService.DOM.$createNode('<div id="divBcg" class="h-300 w-250 background-size-cover"></div>');
         UtilService.DOM.$appendChild(wrapper,divBcg);
         divBcg.style.backgroundImage=`url(${ Background })`;
        
         let table = UtilService.DOM.$createNode('<div id="table" class="column"></div>');
         UtilService.DOM.$appendChild(wrapper,table);

         let firstRow = UtilService.DOM.$createNode('<div id="firstRow" class="flex-row h-100 border-b-1 space-around max-w-900 text-center"></div>');
         UtilService.DOM.$appendChild(table,firstRow);
         let leftPartOfFirstRow = UtilService.DOM.$createNode('<div id="leftPartOfFirstRow" class="border-r-1 w-300 center"><h3>Ime i prezime</h3><br><p class="font-20">Davor Popovic</p></div>');
         UtilService.DOM.$appendChild(firstRow,leftPartOfFirstRow);
         let middlePartOfFirstRow = UtilService.DOM.$createNode('<div id="middlePartOfFirstRow" class="border-r-1 w-300 center"><h3>Poslednji poziv</h3><br><p class="font-20">N/A</p></div>');
         UtilService.DOM.$appendChild(firstRow,middlePartOfFirstRow);
         let rightPartOfFirstRow = UtilService.DOM.$createNode('<div id="rightPartOfFirstRow" class="text-center w-300 center"><h3>Poslednje azuriranje</h3><br><p class="font-20">N/A</p></div>');
         UtilService.DOM.$appendChild(firstRow,rightPartOfFirstRow);
        
         // div (secondRow) which contains four columns 

         let secondRow = UtilService.DOM.$createNode('<div id="secondRow" class="flex-row border-b-1 space-around max-w-900 text-center"></div>');
         UtilService.DOM.$appendChild(table,secondRow);
         let firstPartOfSecondRow= UtilService.DOM.$createNode('<div id="firstPartOfSecondRow" class="border-r-1 w-200 center"><h3>Poslednje azuriranje</h3><br><p class="font-20">N/A</p></div>');
         UtilService.DOM.$appendChild(secondRow,firstPartOfSecondRow);
         let secondPartOfSecondRow = UtilService.DOM.$createNode('<div id="secondPartOfSecondRow" class="border-r-1 w-200 center"><h3>Baterija sata</h3><br><p class="font-20">N/A</p></div>');
         UtilService.DOM.$appendChild(secondRow,secondPartOfSecondRow);
         let thirdPartOfSecondRow = UtilService.DOM.$createNode('<div id="thirdPartOfSecondRow" class="text-center border-r-1 w-200 center"><h3>Telefon</h3><br><p class="font-20">+38269069069</p></div>');
         UtilService.DOM.$appendChild(secondRow,thirdPartOfSecondRow);
         let fourthPartOfSecondRow= UtilService.DOM.$createNode('<div id="fourthPartOfSecondRow" class="text-center w-200 center"><h3>E-mail</h3><br><p class="font-20">davorpopovic@gmail.com</p></div>');
         UtilService.DOM.$appendChild(secondRow,fourthPartOfSecondRow); 
        
        //div (thirdRow) which contains three parts 

        let thirdRow = UtilService.DOM.$createNode('<div id="thirdRow" class="flex-row margin-l-30 space-around max-w-800 text-center"></div>');
        UtilService.DOM.$appendChild(table,thirdRow);
        let firstPart= UtilService.DOM.$createNode('<div id="firstPart" class="center"><h3>Detaljnije</h3><br><p class="font-18 bg-important-2 pointer border-radius-8 light-4 padding-10">BIOMETRIJA</p></div>');
        UtilService.DOM.$appendChild(thirdRow,firstPart);
        let secondPart = UtilService.DOM.$createNode('<div id="secondPart" class="center"><h3>Detaljnije</h3><br><p class="font-18 border-radius-8 pointer bg-theme-main-2 light-4 padding-10">PODSJETNICI</p></div>');
        UtilService.DOM.$appendChild(thirdRow,secondPart);
        let thirdPart = UtilService.DOM.$createNode('<div id="thirdPart" class="text-center center"><h3>Detaljnije</h3><br><p class="font-18 pointer border-radius-8 bg-theme-main-2 light-4 padding-10">ZDRAVSTVENI KARTON</p></div>');
        UtilService.DOM.$appendChild(thirdRow,thirdPart);

        // div (greenButton)
        let greenButton = UtilService.DOM.$createNode('<div id="greenButton" class="flex margin-l-20 font-12 pointer border-radius-4 bg-info-2 w-100 h-300"><p class="light-5 font-size-24 margin-l-10 align-center flex">Pozovi</p></div>');
        UtilService.DOM.$appendChild(wrapper,greenButton);
        
     

    
       

    }

    render() {
        return (<div id="practise" className="flex-column">
            <div id="header" className="row center border-b-1 padding-v-40 margin-h-30 large-text bold">
                Practise Page
            </div>

            <div id="mainPage" className="column margin-v-40 margin-h-30 w-100-perc">

            </div>
        </div>);
    }
}