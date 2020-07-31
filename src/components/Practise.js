// External dependencies
import React from "react";
import {StoreService} from "../services/store.service";
export default class Practise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''

          };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChange (evt) {
            //  we get the evt.target.name (which will be either "email" or "password")
            // and use it to target the key on our `state` object with the same name, using bracket syntax
            this.setState({ [evt.target.name]: evt.target.value });
          }
 

    handleSubmit(event) {
        alert('A email was submitted: ' + this.state.value);
        event.preventDefault();
      }


    render() {
        return (<div id="practise" className="flex-column">
            <div id="header" className="row center border-b-1 padding-v-40 margin-h-30 large-text bold">
                Practise Page
            </div>

            <div id="mainPage" className="column center align-center">

            <form onSubmit={this.handleSubmit}>
            <label className="margin-r-30">Email</label>
            <input type="text" name="email" onChange={this.handleChange} className="margin-r-30" value={this.state.name} />
            <label className="margin-r-30">Password</label>
            <input type="text" name="password" onChange={this.handleChange} value={this.state.name} />
            <input type="submit" value="Submit" 
            onClick={()=>{
                StoreService.updateStoreProperty("email",this.state.email);
                const email=StoreService.getStoreProperty("email");
                 console.log(email);

                 
                StoreService.updateStoreProperty("password",this.state.password);
                 const password=StoreService.getStoreProperty("password"); 
                 console.log(password);
                }}/>
            </form>

            </div>
        </div>);
    }
}