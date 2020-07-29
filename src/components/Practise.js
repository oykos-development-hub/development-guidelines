// External dependencies
import React from "react";

export default class Practise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
          };
          this.handleEmailChange = this.handleEmailChange.bind(this);
          this.handlePasswordChange = this.handlePasswordChange.bind(this);
        }
        handleEmailChange (evt) {
            this.setState({ email: evt.target.value });
          }
          
          handlePasswordChange (evt) {
            this.setState({ password: evt.target.value });
          }

    //     componentDidMount(){
        //store service svrha je da radi kao lokalna baza 
        //da nam podatak ostane u browseru, mi pozivamo updatestorepropertu funkciju
        //npr hocemo da update-ujemo pasword ili email ili username kazemo koji cemo,  
        //kazemo koji properti hocemo da updatejumo
        //imamo objekat story koji je kolekcija 
        //na klik submita zelim da taj username sacuvam 
    // StoreService.updateStoreProperty(property:'this.state.email');
    // StoreService.getStoreProperty(property:'email');    ovo je da nam vrati poslednju vrijednost
    // }
    

    

    render() {
        return (<div id="practise" className="flex-column">
            <div id="header" className="row center border-b-1 padding-v-40 margin-h-30 large-text bold">
                Practise Page
            </div>

            <div id="mainPage" className="column center align-center">
            <label>Email</label>
            <input type="text" name="email" onChange={this.handleEmailChange} />

            <label>Password</label>
            <input type="text" name="password" onChange={this.handlePasswordChange} />
            <button className="margin-t-20 padding-10 bg-theme-main-3 color-light-5 pointer" 
            onClick={()=>{
                 console.log(this.state);
                }}
            >Submit</button>
            </div>
        </div>);
    }
}