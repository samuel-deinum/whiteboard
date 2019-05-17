import React, { Component } from "react";

import WhiteBoard from "./WhiteBoard/WhiteBoard";
import NavBar from "./NavBar/NavBar";
import Modal from "../../UI/Modal/Modal";
import Instruction from "./Instruction";

class Layout extends Component {
  state = {
    showin: false
  };

  instructHandler = () => {
    if (this.state.showin) {
      this.setState({ showin: false });
    } else {
      this.setState({ showin: true });
    }
  };

  render() {
    return (
      <div className="Layout">
        <NavBar instruct={this.instructHandler} />
        <WhiteBoard />
        <Modal show={this.state.showin} modalClosed={this.instructHandler}>
          <Instruction />
        </Modal>
      </div>
    );
  }
}

export default Layout;
