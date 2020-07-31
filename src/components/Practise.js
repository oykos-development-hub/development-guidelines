import React from "react";
import {StoreService} from '../services/store.service';
export default class Practise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            age:'',
            gender:'',
            company:''
          };
          this.handleChange = this.handleChange.bind(this);

            StoreService.updateStoreProperty("email",this.state.email);
            const email=StoreService.getStoreProperty("email");
            StoreService.updateStoreProperty("password",this.state.password);
            const password=StoreService.getStoreProperty("password");
            StoreService.updateStoreProperty("age",this.state.age);
            const age=StoreService.getStoreProperty("age");
            StoreService.updateStoreProperty("gender",this.state.gender);
            const gender=StoreService.getStoreProperty("gender");
            StoreService.updateStoreProperty("company",this.state.company);
            const company=StoreService.getStoreProperty("company");

        
          
          
        }
        
        handleChange (evt) {
          
          this.setState({ [evt.target.name]: evt.target.value });
        } // this is how we generalize change handler

         render() {

        return (<div id="practise" className="flex-column">
            <div id="header" className="row center border-b-1 padding-v-40 margin-h-30 large-text bold">
                Practise Page
            </div>
            <div id="mainPage" className="column center align-center">
            <label>Email</label>
            <input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
            <label>Password</label>
            <input type="text" name="password" onChange={this.handleChange} value={this.state.password} />
            <label>Age</label>
            <input type="text" name="age" onChange={this.handleChange} value={this.state.age} />
            <label>Gender</label>
            <input type="text" name="gender" onChange={this.handleChange} value={this.state.gender} />
            <label>Company</label>
            <input type="text" name="company" onChange={this.handleChange} value={this.state.company} />
            <button className="margin-t-20 padding-10 bg-theme-main-3 color-light-5 pointer" 
            onClick={() => console.log([this.state.email],[this.state.password],[this.state.age],[this.state.gender],[this.state.company])}>Submit</button>
            

        
           
            </div>
            
        </div>);


    
    }
    
   
}