import React from "react";

export default class Image extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="login">
            <img src={require(`../img/${this.props.imgUrl}`)}  height="400px" alt="a"/>
        </div>);
    }
}