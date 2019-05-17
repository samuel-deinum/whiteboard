import React, { Component } from "react";
import "./Modal.css";
import Aux from "../../hoc/Auxillary";
import Backdrop from "../BackDrop/BackDrop";

class Modal extends Component {
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} click={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;