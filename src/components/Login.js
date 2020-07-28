// External dependencies
import React from "react";


export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div id="Login" className="column">
              <div class="flex border-b-1 margin-l-50">
                  <div id="first-row" className="border-r-1 w-300 text-center margin-b-20"><h3>Ime i prezime</h3><div className=" font-size-20">Davor popovic</div></div>
                  <div id="second-row" className="border-r-1 w-300 text-center margin-b-20"><h3>Poslednji poziv</h3><div className=" font-size-20">N/A</div></div>
                  <div id="third-row" className="border-r-1 w-300 text-center margin-b-20"><h3>Poslednje azuriranje</h3><div className=" font-size-20">N/A</div></div>
              </div>

              <div class="flex border-b-1 padding-b-20">
                  <div id="first-row" className="border-r-1 w-300 text-center margin-t-20"><h3>Baterija telefona</h3><div className=" font-size-20">N/A</div></div>
                  <div id="second-row" className="border-r-1 w-300 text-center margin-t-20"><h3>Baterija sata</h3><div className=" font-size-20">N/A</div></div>
                  <div id="third-row" className="border-r-1 w-300 text-center margin-t-20"><h3>Telefon</h3><div className=" font-size-20">+3826782736</div></div>
                  <div id="forth-row" className="w-300 text-center margin-t-20"><h3>E mail</h3><div className=" font-size-20">davor.pejovic@gmail.com</div></div>

              </div>
       
            
        </div>);
    }
}