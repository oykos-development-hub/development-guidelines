import React from "react";
export default class CallButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                  <button  className="border-radius-top-right-6 bg-info-3 w-100perc h-100perc column center light-5">{this.props.text}</button>
        );
    }
}
