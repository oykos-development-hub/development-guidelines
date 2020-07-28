import React from "react";
export default class Image extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div id="Image">
        <div id="imageSection" className="border-radius-top-left-6 bg-size-cover bg-no-repeat">
          <img src={require('../img/main-bg.jpg')}className="h-350 w-400"></img>
            </div>
        </div>);
    }
}