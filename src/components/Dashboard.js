// External dependencies
import React from "react";

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="dashboard" className="flex-column">
            <div id="header" className="row center border-b-1 padding-v-40 margin-h-30 large-text bold">
                Dashboard Page
            </div>
        </div>);
    }
}