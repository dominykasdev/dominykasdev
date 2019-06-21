import React from "react";
import QRCode from "./images/QRCode.png";
//import Button from "./Button";

//var counter = 0;
//var cText;

/*const bSLoader = () => {
  setInterval(() => {
    console.log(300);
    if (counter < 100) {
      counter += 10;
    } else {
      cText = counter + "% complete";
      return cText;
    }
  }, 300);
};*/

/*const escBS = () => {
  console.log("drgsdfsdfsfs sdfsd fs");
};*/

class BlueScreen extends React.Component {
  state = { counter: 0, timerID: "" };

  /*componentDidUpdate() {
    //console.log("lkashdkah");
    document.querySelector(".blueScreen");
    bSLoader();
  }*/

  /*onchange = event => {
    console.log(this.state.counter);
  };*/

  componentDidMount() {
    this.setState({ timerID: setInterval(() => this.bSLoader(), 300) });
  }

  bSLoader() {
    //setInterval(() => {
    var newCounter = this.state.counter;
    if (this.state.counter < 100) {
      newCounter += 10;
      this.setState({ counter: newCounter });
    } else {
      clearInterval(this.state.timerID);
    }
  }

  render() {
    return (
      <div className={`blueScreen ${this.props.displayToggle}`}>
        <p className="face">:(</p>
        <p>
          Your pc ran into a problem and needs to restart. We're just collecting
          some error info, and then we'll restart for you.
        </p>
        <p>{`${this.state.counter}% complete`}</p>
        <div className="bottom">
          <img src={QRCode} alt="Link to dominykas.dev website" />
          <p className="smallText">
            For more information about this issue and possible fixes, visit
            https://dominykas.dev/#contact
          </p>
          <p className="smallText bottom">
            If you call a support person, give them this info:
            <br />
            Stop code: PRESS_ESC_TO_LEAVE!!
          </p>
        </div>
      </div>
    );
  }
}

export default BlueScreen;
