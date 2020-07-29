import React from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (<div id="Login" className="column  h-300">
              <div className="font-12  space-evenly flex row  margin-b-50 border-b-1 border-b-light-3-i">
                  <div id="first-row" className="h-50 column margin-h-20  border-r-1 border-r-light-3-i padding-r-100 margin-b-30"><h3 className="margin-b-5 text-center">Ime i prezime</h3><div className="light-3 light margin-b-30 text-center letter-spacing-05">Davor popovic</div></div>
                  <div id="second-row" className="column  border-r-1 border-r-light-3-i padding-r-100 h-50"><h3 className="margin-b-5">Poslednji poziv</h3><div className="light letter-spacing-05 light-3 text-center">N/A</div></div>
                  <div id="third-row" className=" column"><h3 className="margin-b-5 text-center">Poslednje azuriranje</h3><div className="letter-spacing-05 light-3 text-center ">N/A</div></div>
              </div>
              <div className="font-12 space-around row margin-b-40 border-b-1 border-b-light-3-i padding-b-20">
                  <div id="first-row" className="column margin-h-30 border-r-1 border-r-light-3-i padding-r-100 h-50 margin-b-10"><h3>Baterija telefona</h3><div>Davor popovic</div></div>
                  <div id="second-row" className="column margin-h-30 border-r-1 border-r-light-3-i padding-r-100 h-50"><h3 className="margin-b-5 text-center">Baterija sata</h3><div className="letter-spacing-05 light-3 margin-b-5 text-center">N/A</div></div>
                  <div id="third-row" className="column margin-h-30 border-r-1 border-r-light-3-i padding-r-100 h-50"><h3 className="margin-b-5 text-center">Telefon</h3><div className="letter-spacing-05 light-3">+3826782736</div></div>
                  <div id="forth-row" className="column margin-h-30 h-50"><h3 className="margin-b-5 text-center">E mail</h3><div className="light-3 text-center letter-spacing-05">davor.pejovic@gmail.com</div></div>
              </div>
        </div>);
    }
}
