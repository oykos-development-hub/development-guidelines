// External dependencies
import React from "react";

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="about" className="flex-column">
            <div id="header" className="row center border-b-1 padding-v-40 margin-h-30 large-text bold">
                About Page
            </div>
        </div>);
    }
}