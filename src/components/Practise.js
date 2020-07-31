import React from "react";
import {StoreService} from '../services/store.service';
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
          
          
        
     
    render() {
        return (<div id="practise" className="flex-column">
            <div id="header" className="row center border-b-1 padding-v-40 margin-h-30 large-text bold">
                Practise Page
            </div>
            <div id="mainPage" className="column center align-center">
            <label>Email</label>
            <input type="text" name="email" onChange={this.handleEmailChange} value={this.state.name} />
            <label>Password</label>
            <input type="text" name="password" onChange={this.handlePasswordChange} value={this.state.name} />
            <button className="margin-t-20 padding-10 bg-theme-main-3 color-light-5 pointer" 
            onClick={()=>{
                 
                 
                StoreService.updateStoreProperty("email",this.state.email);
                const email=StoreService.getStoreProperty("email");
                StoreService.updateStoreProperty("password",this.state.password);
                const password=StoreService.getStoreProperty("password");
                console.log(email);
                 console.log(password);
                }}
            >Submit</button>
           
            </div>
        </div>);
    }
   
}