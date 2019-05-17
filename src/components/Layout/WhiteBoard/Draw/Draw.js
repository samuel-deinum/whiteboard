import React, { Component } from "react";

import DrawTool from "./DrawTool/DrawTool";
import DrawBox from "./DrawBox/DrawBox";
import Aux from "../../../../hoc/Auxillary";

class Draw extends Component {
  state = {
    polylines: [],
    colorSelect: "black",
    on: false,
    osl: 0,
    ost: 0,
    minx: document.getElementById("wbid").offsetWidth,
    miny: document.getElementById("wbid").offsetHeight,
    maxx: 0,
    maxy: 0
  };

  downHandler = e => {
    let container = document.getElementById("wbid");
    let containerOffSetLeft =
      container.offsetLeft + container.scrollLeft + container.clientLeft;
    let containerOffSetTop =
      container.offsetTop + container.scrollTop + container.clientTop;

    let mPolylines = [...this.state.polylines];

    let x = e.clientX - containerOffSetLeft;
    let y = e.clientY - containerOffSetTop;

    let minx = this.state.minx;
    let miny = this.state.miny;
    let maxx = this.state.maxx;
    let maxy = this.state.maxy;

    if (x < minx) {
      minx = x;
    }
    if (x > maxx) {
      maxx = x;
    }
    if (y < miny) {
      miny = y;
    }
    if (y > maxy) {
      maxy = y;
    }

    mPolylines.push({
      id: mPolylines.length,
      x: [x],
      y: [y],
      string: x + "," + y,
      color: this.state.colorSelect
    });

    this.setState({
      on: true,
      osl: containerOffSetLeft,
      ost: containerOffSetTop,
      polylines: mPolylines,
      minx: minx,
      miny: miny,
      maxx: maxx,
      maxy: maxy
    });
  };

  moveHandler = e => {
    if (this.state.on) {
      let x = e.clientX - this.state.osl;
      let y = e.clientY - this.state.ost;

      let minx = this.state.minx;
      let miny = this.state.miny;
      let maxx = this.state.maxx;
      let maxy = this.state.maxy;

      if (x < minx) {
        minx = x;
      }
      if (x > maxx) {
        maxx = x;
      }
      if (y < miny) {
        miny = y;
      }
      if (y > maxy) {
        maxy = y;
      }

      let mPolylines = [...this.state.polylines];

      let newString =
        this.state.polylines[this.state.polylines.length - 1].string +
        " " +
        x +
        "," +
        y;

      mPolylines[this.state.polylines.length - 1].string = newString;
      mPolylines[this.state.polylines.length - 1].x.push(x);
      mPolylines[this.state.polylines.length - 1].y.push(y);
      this.setState({
        polylines: mPolylines,
        minx: minx,
        miny: miny,
        maxx: maxx,
        maxy: maxy
      });
    }
  };

  upHandler = () => {
    this.setState({ on: false });
  };

  colorButtonHandler = c => {
    this.setState({ colorSelect: c });
  };

  undoHandler = () => {
    let mPolylines = [...this.state.polylines];
    mPolylines.pop();
    this.setState({ polylines: mPolylines });
  };

  addHandler = () => {
    let mPolylines = [...this.state.polylines];

    //Increase Picture size
    let minX = this.state.minx - 3;
    let maxX = this.state.maxx + 3;
    let minY = this.state.miny - 3;
    let maxY = this.state.maxy + 3;

    let h =
      ((maxY - minY) / document.getElementById("wbid").offsetHeight) * 100;
    let vh = maxY - minY;
    let ar = (maxX - minX) / vh;

    let polyObj = {
      height: h,
      viewHeight: vh,
      ar: ar,
      elements: {}
    };

    for (let i = 0; i < mPolylines.length; i++) {
      mPolylines[i].string = "";
      for (let j = 0; j < mPolylines[i].x.length; j++) {
        mPolylines[i].x[j] = mPolylines[i].x[j] - minX;
        mPolylines[i].y[j] = mPolylines[i].y[j] - minY;

        mPolylines[i].string =
          mPolylines[i].string +
          " " +
          mPolylines[i].x[j] +
          "," +
          mPolylines[i].y[j];
      }

      polyObj["elements"]["polyline" + mPolylines[i].id] = {
        fill: "none",
        stroke: mPolylines[i].color,
        strokeWidth: "4",
        points: mPolylines[i].string
      };
    }
    this.setState({
      polylines: [],
      minx: document.getElementById("wbid").offsetWidth,
      miny: document.getElementById("wbid").offsetHeight,
      maxx: 0,
      maxy: 0
    });
    this.props.addDraw(polyObj, minX, minY);
  };

  render() {
    return (
      <Aux>
        <DrawBox
          polylines={this.state.polylines}
          color={this.state.color}
          down={this.downHandler}
          move={this.moveHandler}
          up={this.upHandler}
        />
        <DrawTool
          switchColor={this.colorButtonHandler}
          undo={this.undoHandler}
          off={this.props.off}
          add={this.addHandler}
        />
      </Aux>
    );
  }
}

export default Draw;
