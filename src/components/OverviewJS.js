// External dependencies
import React from "react";
import {UtilService} from "../services/util.service";


export default class OverviewJS extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let element = false;
        element = UtilService.DOM.selectDomElements('div.row');
        console.log('element',element);
    }

    render() {
        return (<div id="overview-js" className="flex-column">
            <div id="header" className="row center border-b-1 padding-v-40 margin-h-30 large-text bold">
                Oykos Development Guidelines
            </div>

            <div id="mainPage" className="column align-stretch margin-v-40 margin-h-30">
                <ul className="large-text">
                    <li>Chapter #2 - Way of JS</li>
                </ul>

                <div id="margin-padding" className="row justify-start align-stretch padding-h-30 margin-t-30">
                    <div id="left" className="border-r-1 min-max-w-50perc padding-20">
                        <ul className="big-text">
                            <li>Selecting DOM elements</li>
                        </ul>

                        <div className="column align-stretch">
                            <p>
                                For styling margins and padding we use different combination of classes. See example below.
                            </p>
                            <code className="margin-10">.margin-[value]</code>
                            <p>
                                This sets all four margins to one of the predefined values.
                                We can also set margins individually (top, right, bottom, left) by using class
                                names...
                            </p>
                        </div>
                    </div>

                    <div id="right" className="column align-stretch justify-start padding-20 grow-1">
                        <div className="flex center margin-20"
                             style={{ backgroundColor: "#54ca54" }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}