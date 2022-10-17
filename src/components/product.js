import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div
        className={
          "product" +
          " " +
          this.props.color +
          " " +
          (this.props.start ? "start" : "") +
          (this.props.end ? "end" : "")
        }
      >
        <img className="prod-img" src={this.props.icon} alt="main-icon" draggable="false"/>
        <div className="title">{this.props.title}</div>
        <div className="description">{this.props.description}</div>
        <button className={'button ' + this.props.color}>{this.props.buttonText}</button>
      </div>
    );
  }
}

export default Product;
