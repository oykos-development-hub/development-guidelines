// External dependencies
import React from "react";
import { UtilService } from "../services/util.service";
import { StoreService } from "../services/store.service";

export default class Practise extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email:''
        }
        
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleSubmit() {
        let name = this.state.name;
        let email = this.state.email
        if(this.state.name && this.state.email) {
        StoreService.updateStoreProperty('name', this.state.name);
        StoreService.updateStoreProperty('email', this.state.email);
        const storedName = StoreService.getStoreProperty('name');
        const storedEmail = StoreService.getStoreProperty('email');
        console.log('name:', storedName);
        console.log('email:', storedEmail);
        }        
    }




    render() {
        return (<div id="practise" className="flex-column">
            <div id="header" className="row center border-b-1 padding-v-40 margin-h-30 large-text bold">
                Practise Page
            </div>

            <div id="mainPage" className="column align-stretch margin-v-40 margin-h-30">
                <input id="name" type="text" placeholder="name" onChange={this.handleChangeName}></input>
                <input id="name" type="email" placeholder="email" onChange={this.handleChangeEmail}></input>
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </div>
        </div>);
    }
}