import React, { Component } from "react"

import "./WhiteBoard.css"

import ToolBarContainer from "./ToolBarContainer/ToolBarContainer"
import Shapes from "./Shapes/Shapes"
import ShapeEdit from "./ShapeEdit/ShapeEdit"
import SvgObject from "../../../assets/Svgs/svgObj"
import Draw from "./Draw/Draw"

class WhiteBoard extends Component {
  state = {
    aspectRatio: { w: 16, h: 9 },
    moveShapes: false,
    movingShape: [],
    moveX: 0,
    moveY: 0,
    orgX: [],
    orgY: [],
    toolBarClosed: false,
    eraserActive: false,
    eraserDown: false,
    editShape: -1,
    shapes: [],
    drawTool: false,
    svgs: SvgObject,
    newSvg: 0,
    animationOpen: true,
    timeLineArray: [],
    timeLineSelect: null,
    timeLineElementSelect: 0,
  }

  /*
  componentDidMount = () => {
    this.addTimeLine();
  };*/

  shapeClickHandler = (id, e) => {
    let shapeMove = [...this.state.movingShape]
    let shapeOrgX = [...this.state.orgX]
    let shapeOrgY = [...this.state.orgY]
    if (!window.event.ctrlKey) {
      shapeMove = []
      shapeOrgX = []
      shapeOrgY = []
    }

    if (!shapeMove.includes(id)) {
      shapeMove.push(id)
      shapeOrgX.push(this.state.shapes[id].x)
      shapeOrgY.push(this.state.shapes[id].y)
    }

    this.setState({
      moveShapes: true,
      movingShape: shapeMove,
      moveX: e.clientX,
      moveY: e.clientY,
      orgX: shapeOrgX,
      orgY: shapeOrgY,
      eraserDown: true,
      editShape: -1,
    })

    this.shapeOverHandler(id, true)
  }

  mouseMoveHandler = e => {
    if (this.state.moveShapes) {
      let deltaX =
        ((e.clientX - this.state.moveX) /
          document.getElementById("wbid").offsetWidth) *
        100
      let deltaY =
        ((e.clientY - this.state.moveY) /
          document.getElementById("wbid").offsetHeight) *
        100

      let shapes = [...this.state.shapes]
      const movingShapes = [...this.state.movingShape]
      for (let i = 0; i < movingShapes.length; i++) {
        const newX = this.state.orgX[i] + deltaX
        const newY = this.state.orgY[i] + deltaY
        shapes[movingShapes[i]].x = newX
        shapes[movingShapes[i]].y = newY
      }
      this.setState({ shapes: shapes })
    }
  }

  mouseUpHandler = () => {
    if (!window.event.ctrlKey) {
      this.setState({
        movingShape: [],
        orgX: [],
        orgY: [],
      })
    }
    this.setState({
      moveShapes: false,
      toolBarClosed: false,
      eraserDown: false,
    })
  }

  insertShapeHandler = (type, e) => {
    let container = document.getElementById("wbid")

    let mShapes = [...this.state.shapes]
    let containerOffSetLeft =
      container.offsetLeft + container.scrollLeft + container.clientLeft
    let containerOffSetTop =
      container.offsetTop + container.scrollTop + container.clientTop

    let mX =
      ((e.clientX - containerOffSetLeft) / container.offsetWidth) * 100 -
      (10 * this.state.aspectRatio.h) / this.state.aspectRatio.w / 2

    let mY =
      ((e.clientY - containerOffSetTop) / container.offsetHeight) * 100 - 10 / 2
    const newShape = {
      id: mShapes.length,
      x: mX,
      y: mY,
      type: type,
      display: "visible",
      color: "#00000",
      scaleX: 1,
      scaleY: 1,
      rotate: 0,
      active: "auto",
      time: 0.03,
    }
    mShapes.push(newShape)
    this.setState({
      moveShapes: true,
      movingShape: [mShapes.length - 1],
      orgX: [mX],
      orgY: [mY],
      moveX: e.clientX,
      moveY: e.clientY,
      toolBarClosed: true,
      shapes: mShapes,
      editShape: -1,
    })
  }

  eraserClickHandler = () => {
    if (!this.state.eraserActive) {
      this.setState({ eraserActive: true })
    } else {
      this.setState({ eraserActive: false })
    }
  }

  whiteBoardDownHandler = () => {
    this.setState({ eraserDown: true })
  }

  shapeOverHandler = (id, shapeOnClick) => {
    if (this.state.eraserActive && (this.state.eraserDown || shapeOnClick)) {
      let mShapes = [...this.state.shapes]
      mShapes[id].display = "hidden"

      this.setState({ mShapes })
    }
  }

  shapeDoubleClickHandler = id => {
    this.setState({ editShape: id })
  }

  onChangeHandler = (type, event) => {
    let mShapes = [...this.state.shapes]

    if (type === "rotate") {
      mShapes[this.state.editShape][type] = parseFloat(event.target.value)
      this.setState({ shapes: mShapes })
    } else if (type === "scaleX" || type === "scaleY") {
      if (event.target.value >= 0) {
        mShapes[this.state.editShape][type] = 1 + event.target.value / 10
      } else {
        mShapes[this.state.editShape][type] = 1 + event.target.value / 100
      }
      this.setState({ shapes: mShapes })
    } else if (type === "scale") {
      if (event.target.value >= 0) {
        mShapes[this.state.editShape]["scaleX"] = 1 + event.target.value / 10
        mShapes[this.state.editShape]["scaleY"] = 1 + event.target.value / 10
      } else {
        mShapes[this.state.editShape]["scaleX"] = 1 + event.target.value / 100
        mShapes[this.state.editShape]["scaleY"] = 1 + event.target.value / 100
      }
      this.setState({ shapes: mShapes })
    } else if (type === "delete") {
      mShapes[this.state.editShape]["display"] = "hidden"
      this.setState({ shapes: mShapes, editShape: -1 })
    }
  }

  drawToolOn = () => {
    let mShapes = [...this.state.shapes]
    mShapes.map(s => {
      s.active = "none"
      return null
    })

    this.setState({ drawTool: true, toolBarClosed: true, shapes: mShapes })
  }

  drawToolOff = () => {
    let mShapes = [...this.state.shapes]
    mShapes.map(s => {
      s.active = "auto"
      return null
    })
    this.setState({ drawTool: false, shapes: mShapes })
  }

  addDraw = (drawSvg, mX, mY) => {
    let mSvgs = { ...this.state.svgs }
    let mShapes = [...this.state.shapes]
    let mType = "newSvg" + this.state.newSvg
    mSvgs[mType] = drawSvg

    this.setState({ svgs: mSvgs, newSvg: this.state.newSvg + 1 })
    let container = document.getElementById("wbid")
    mX = (mX / container.offsetWidth) * 100
    mY = (mY / container.offsetHeight) * 100

    const newShape = {
      id: mShapes.length,
      x: mX,
      y: mY,
      type: mType,
      display: "visible",
      color: "#00000",
      scaleX: 1,
      scaleY: 1,
      rotate: 0,
      active: "none",
      time: 0.03,
    }

    mShapes.push(newShape)

    this.setState({ shapes: mShapes })
  }

  render() {
    let mClass = ["WhiteBoard"]

    if (this.state.eraserActive) {
      mClass.push("Erase")
    }

    const style = {
      width: "95vw",
      height: (98 * this.state.aspectRatio.h) / this.state.aspectRatio.w + "vw",
      maxHeight: "85vh",
      maxWidth:
        (100 * this.state.aspectRatio.w) / this.state.aspectRatio.h + "vh",
    }

    let shapeEdit = null

    if (this.state.editShape !== -1) {
      shapeEdit = (
        <ShapeEdit
          shape={this.state.shapes[this.state.editShape]}
          ar={this.state.aspectRatio}
          onChange={this.onChangeHandler}
        />
      )
    }

    const draw = this.state.drawTool ? (
      <Draw off={this.drawToolOff} addDraw={this.addDraw} />
    ) : null

    return (
      <div
        className={mClass.join(" ")}
        style={style}
        id="wbid"
        onMouseMove={this.mouseMoveHandler}
        onMouseUp={this.mouseUpHandler}
        onMouseDown={this.whiteBoardDownHandler}
      >
        <Shapes
          shapes={this.state.shapes}
          svgs={this.state.svgs}
          ar={this.state.aspectRatio}
          click={this.shapeClickHandler}
          mouseover={this.shapeOverHandler}
          doubleClick={this.shapeDoubleClickHandler}
        />
        {shapeEdit}
        <ToolBarContainer
          svgs={this.state.svgs}
          insertShape={this.insertShapeHandler}
          toolBarClosed={this.state.toolBarClosed}
          eraserClick={this.eraserClickHandler}
          eraserActive={this.state.eraserActive}
          drawTool={this.drawToolOn}
        />
        {draw}
      </div>
    )
  }
}

export default WhiteBoard
