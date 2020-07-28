import React from "react";

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="Button">
            <div className={"uppercase padding-h-20 padding-v-10 border-radius-8 light-5 " + this.props.bgcolor}
                onClick={()=>{alert(this.props.text)}}>
                {this.props.text}
            </div>
        </div>);
    }
}