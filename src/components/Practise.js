// External dependencies
import React from "react";
import {UtilService} from "../services/util.service";
import Background from '../img/court.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faBaby } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />


export default class Practise extends React.Component {
    constructor(props) {
        super(props);
    }
    
            componentDidMount(){
           

            let wrapper=UtilService.DOM.$createNode('<div id="wrapper" class="border-radius-top-left-6 border-radius-top-right-6 h-300 row margin-v-20 margin-h-10"></div>');
            UtilService.DOM.$appendChild(mainPage,wrapper);

            //*********  Picture Section *************
            let pictureSection=UtilService.DOM.$createNode('<div id="pictureSection" class="border-radius-top-left-6 h-100perc w-25perc bg-size-cover bg-no-repeat bg-position-50-perc"></div>');
            UtilService.DOM.$appendChild(wrapper,pictureSection);
            pictureSection.style.backgroundImage=`url(${ Background })`;

            //*********** Middle Section ******************
            let middleSection=UtilService.DOM.$createNode('<div id="middleSection" class="bg-light-5 w-70perc column padding-v-60 padding-h-20"></div>');
            UtilService.DOM.$appendChild(wrapper,middleSection);

            //First Row
            let firstRow=UtilService.DOM.$createNode('<div id="firstRow" class="font-12 space-around flex row  margin-b-20 border-b-1 border-b-light-3-i"></div>');
            UtilService.DOM.$appendChild(middleSection,firstRow);

            let firstDiv=UtilService.DOM.$createNode('<div id="firstDiv" class="h-30 column margin-h-20  border-r-1 border-r-light-3-i padding-r-50 margin-b-10"></div>');
            UtilService.DOM.$appendChild(firstRow,firstDiv);
            let imePrezimeSpan=UtilService.DOM.$createNode('<span id="imePrezimeSpan" class="normal margin-b-5 text-center">Ime i prezime</span>');
            UtilService.DOM.$appendChild(firstDiv,imePrezimeSpan);
            let DPSpan=UtilService.DOM.$createNode('<span id="DPSpan" class="light-3 light margin-b-30 text-center letter-spacing-05">Davor Popovic</span>');
            UtilService.DOM.$appendChild(firstDiv,DPSpan);

            
            let secondDiv=UtilService.DOM.$createNode('<div id="secondDiv" class="column  border-r-1 border-r-light-3-i padding-r-50 h-30 "></div>');
            UtilService.DOM.$appendChild(firstRow,secondDiv);
            let poslednjiPozivSpan=UtilService.DOM.$createNode('<span id="poslednjiPozivSpan" class="margin-b-5">Poslednji poziv</span>');
            UtilService.DOM.$appendChild(secondDiv,poslednjiPozivSpan);
            let NA1Span=UtilService.DOM.$createNode('<span id="NA1Span" class="light letter-spacing-05 light-3 text-center">N/A</span>');
            UtilService.DOM.$appendChild(secondDiv,NA1Span);


            let thirdDiv=UtilService.DOM.$createNode('<div id="thirdDiv" class="column "></div>');
            UtilService.DOM.$appendChild(firstRow,thirdDiv);
            let poslednjeAzuriranjeSpan=UtilService.DOM.$createNode('<span id="poslednjeAzuriranjeSpan" class="margin-b-5 text-center">Poslednje azuriranje</span>');
            UtilService.DOM.$appendChild(thirdDiv,poslednjeAzuriranjeSpan);
            let NA2Span=UtilService.DOM.$createNode('<span id="NA2Span" class="letter-spacing-05 light-3 text-center ">N/A</span>');
            UtilService.DOM.$appendChild(thirdDiv,NA2Span);



            //Second Row
            let secondRow=UtilService.DOM.$createNode('<div id="secondRow" class="font-12 space-around row margin-b-20 border-b-1 border-b-light-3-i "></div>');
            UtilService.DOM.$appendChild(middleSection,secondRow);


            let first2Div=UtilService.DOM.$createNode('<div id="first2Div" class="column margin-h-30 border-r-1 border-r-light-3-i padding-r-30 h-30 margin-b-10"></div>');
            UtilService.DOM.$appendChild(secondRow,first2Div);
            let baterijaTelefonaSpan=UtilService.DOM.$createNode('<span id="baterijaTelefonaSpan" class="margin-b-5 text-center">Baterija telefona</span>');
            UtilService.DOM.$appendChild(first2Div,baterijaTelefonaSpan);
            let NA3Span=UtilService.DOM.$createNode('<span id="NA3Span" class="letter-spacing-05 light-3 margin-b-5 text-center">N/A</span>');
            UtilService.DOM.$appendChild(first2Div,NA3Span);

            let second2Div=UtilService.DOM.$createNode('<div id="second2Div" class="column margin-h-30 border-r-1 border-r-light-3-i padding-r-30 h-30"></div>');
            UtilService.DOM.$appendChild(secondRow,second2Div);
            let baterijaSataSpan=UtilService.DOM.$createNode('<span id="baterijaSataSpan" class="margin-b-5 text-center">Baterija sata</span>');
            UtilService.DOM.$appendChild(second2Div,baterijaSataSpan);
            let NA4Span=UtilService.DOM.$createNode('<span id="NA4Span" class="letter-spacing-05 light-3 text-center">N/A</span>');
            UtilService.DOM.$appendChild(second2Div,NA4Span);

            let third2Div=UtilService.DOM.$createNode('<div id="third2Div" class="column margin-h-30 border-r-1 border-r-light-3-i padding-r-30 h-30"></div>');
            UtilService.DOM.$appendChild(secondRow,third2Div);
            let telefonSpan=UtilService.DOM.$createNode('<span id="telefonSpan" class="margin-b-5 text-center">Telefon</span>');
            UtilService.DOM.$appendChild(third2Div,telefonSpan);
            let brojSpan=UtilService.DOM.$createNode('<span id="brojSpan" class="letter-spacing-05 light-3">+38268777777</span>');
            UtilService.DOM.$appendChild(third2Div,brojSpan);

            let fourth2Div=UtilService.DOM.$createNode('<div id="fourth2Div" class="column margin-h-30 h-30"></div>');
            UtilService.DOM.$appendChild(secondRow,fourth2Div);
            let emailSpan=UtilService.DOM.$createNode('<span id="emailSpan" class="margin-b-5 text-center">Email</span>');
            UtilService.DOM.$appendChild(fourth2Div,emailSpan);
            let eSpan=UtilService.DOM.$createNode('<span id="eSpan" class="light-3 text-center letter-spacing-05">sddddjasja@gmail.com</span>');
            UtilService.DOM.$appendChild(fourth2Div,eSpan);

            



            //Third Row
            let thirdRow=UtilService.DOM.$createNode('<div id="thirdRow" class="row space-around"></div>');
            UtilService.DOM.$appendChild(middleSection,thirdRow);

            let first3Div=UtilService.DOM.$createNode('<div id="first3Div" class="column margin-h-50 "> </div>');
            UtilService.DOM.$appendChild(thirdRow,first3Div);
            let detaljnije1Span=UtilService.DOM.$createNode('<span id="detaljnije1Span" class="small-text  margin-b-15 text-center">Detaljnije</span>');
            UtilService.DOM.$appendChild(first3Div,detaljnije1Span);
            let biometrijaSpan=UtilService.DOM.$createNode('<span id="biometrijaSpan" class="shadow-medium light font-12 padding-h-10 padding-v-5 light-5 uppercase border-radius-4 bg-important-2">biometrija</span>');
            UtilService.DOM.$appendChild(first3Div,biometrijaSpan);


            let second3Div=UtilService.DOM.$createNode('<div id="second3Div" class="column margin-h-50"> </div>');
            UtilService.DOM.$appendChild(thirdRow,second3Div);
            let detaljnije2Span=UtilService.DOM.$createNode('<span id="detaljnije2Span" class="small-text  margin-b-15 text-center">Detaljnije</span>');
            UtilService.DOM.$appendChild(second3Div,detaljnije2Span);
            let podsjetniciSpan=UtilService.DOM.$createNode('<span id="podsjetniciSpan" class="shadow-medium light font-12 padding-h-10 padding-v-5 light-5 uppercase border-radius-4 bg-theme-main-4">podsjetnici</span>');
            UtilService.DOM.$appendChild(second3Div,podsjetniciSpan);

            let third3Div=UtilService.DOM.$createNode('<div id="third3Div" class="column margin-h-50"> </div>');
            UtilService.DOM.$appendChild(thirdRow,third3Div);
            let detaljnije3Span=UtilService.DOM.$createNode('<span id="detaljnije3Span" class="small-text  margin-b-15 text-center">Detaljnije</span>');
            UtilService.DOM.$appendChild(third3Div,detaljnije3Span);
            let zdravstveniKartonSpan=UtilService.DOM.$createNode('<span id="zdravstveniKartonSpan" class="shadow-medium light font-12 padding-h-10 padding-v-5 light-5 uppercase border-radius-4 bg-theme-main-4">zdravstveni karton</span>');
            UtilService.DOM.$appendChild(third3Div,zdravstveniKartonSpan);





            //*********  Green Section ************
            let greenSection=UtilService.DOM.$createNode('<div id="greenSection" class="border-radius-top-right-6 bg-info-3 w-5perc column center"></div>');
            UtilService.DOM.$appendChild(wrapper,greenSection);

            let buttonDiv=UtilService.DOM.$createNode('<div id="buttonDiv" class="row light-5" style=transform:rotate(90deg)> </div>');  
            UtilService.DOM.$appendChild(greenSection,buttonDiv);

            let pozoviSpan=UtilService.DOM.$createNode('<span id="pozoviSpan" class="margin-r-10">Pozovi</span>');
            UtilService.DOM.$appendChild(buttonDiv,pozoviSpan);

            let iconSpan=UtilService.DOM.$createNode('<span id="iconSpan"> i</span>');
            
        //<label><FontAwesomeIcon icon="envelope"/></label><FontAwesomeIcon icon="coffee"/>
        //  <i class="fas fa-phone-volume"></i>
        
          
            UtilService.DOM.$appendChild(buttonDiv,iconSpan);


    

            }
    render() {
        return (<div id="practise" className="flex-column ">
            {/* <div id="header" className="row center border-b-1 padding-v-40 margin-h-30 large-text bold">
                Practise Page fff
            </div> */}

            <div id="mainPage" className="column align-stretch bg-light-1">
       
            

            
           
            </div>
        </div>);
    }
}