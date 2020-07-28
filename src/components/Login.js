import React from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="login" className="flex-column font-18">
            <div id="first-row" className="flex padding-b-10 border-b-1 margin-b-10">
                <div className="column center border-r-1 padding-h-90 grow-1">
                    <p className="bold">Ime i Prezime</p>
                    <p>{this.props.ime}</p>
                </div>
                <div className="column center border-r-1 padding-h-90 grow-1">
                    <p className="bold">Poslednji Poziv</p>
                    <p>{this.props.poslednjiPoziv}</p>
                </div>
                <div className="column center padding-h-90 grow-1">
                    <p className="bold">Poslednje Azuriranje</p>
                    <p>{this.props.poslednjeAzuriranje}</p>
                </div>
            </div>
            <div id="second-row" className="flex padding-b-10 border-b-1 margin-b-10">
                <div className="column center border-r-1 padding-h-40 grow-1">
                    <p className="bold">Baterija telefona</p>
                    <p>{this.props.baterijaTelefona}</p>
                </div>
                <div className="column center border-r-1 padding-h-40 grow-1">
                    <p className="bold">Baterija sata</p>
                    <p>{this.props.baterijaSata}</p>
                </div>
                <div className="column center border-r-1 padding-h-40 grow-1">
                    <p className="bold">Telefon</p>
                    <p>{this.props.telefon}</p>
                </div>
                <div className="column center padding-h-40 grow-1">
                    <p className="bold">E-mail</p>
                    <p>{this.props.email}</p>
                </div>
            </div>
        </div>);
    }
}