import React from "react";
import {Component} from "react";

export default class Greeting extends Component {
    render() {
    return (
      <div className="greeting">
        Hello, {this.props.name}! Well done, once again! hehe
      </div>
    );
  }
}
