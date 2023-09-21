import React, { Component } from "react";

class Practice1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
    };
  }

  redBtn = () => {
    this.setState({ color: "red" });
  };

  blueBtn = () => {
    this.setState({ color: "blue" });
  };

  render() {
    const style = { color: this.state.color }; // 스타일 객체를 생성

    return (
      <div>
        <h1 style={style}>검정</h1>
        <button onClick={this.redBtn}>빨간색</button>
        <button onClick={this.blueBtn}>파란색</button>
      </div>
    );
  }
}

export default Practice1;
