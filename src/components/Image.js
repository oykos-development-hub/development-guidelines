import React from "react";
export default class Image extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div id="Image" className="border-radius-top-left-6 h-100perc w-25perc bg-size-cover bg-no-repeat bg-position-50-perc">
            
          <img src={require('../img/main-bg.jpg')} className="h-100perc w-400"></img>
          
            
        </div>);
    }
}