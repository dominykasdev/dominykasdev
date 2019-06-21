import React from "react";
import ReactDOM from "react-dom";
//import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
//import ReactFullpage from "@fullpage/react-fullpage";
import "./styles.scss";
import FullPageSections from "./FullPageSections";
import Header from "./Header";
import Button from "./Button";
import Fullscreen from "react-full-screen";
import BlueScreen from "./blueScreen";
import Soundfile from "./audio/TO_BE_CONTINUED.mp3";
//import Music from "./Music";

class App extends React.Component {
  state = {
    blueScreen: "hidden",
    isFull: false
  };

  goFull = () => {
    var audio = new Audio("./audio/TO_BE_CONTINUED.mp3");
    audio.play();
    setTimeout(() => {
      this.state.isFull === false
        ? this.setState({ isFull: true, blueScreen: "visible" })
        : this.setState({ isFull: false, blueScreen: "hidden" });
    }, 6000);
  };

  listener = () => {
    //if (this.state.isFull === true) {
    document.addEventListener("keydown", event => {
      if (event.keyCode === 122 || event.keyCode === 27) {
        this.setState({ isFull: false, blueScreen: "hidden" });
      }
    });
    //}
  };

  renderBlueScreen() {
    if (this.state.isFull === true) {
      return <BlueScreen displayToggle={this.state.blueScreen} />;
    } else {
      return "";
    }
  }

  /*renderMusic() {
    const audio = new Audio("./audio/TO_BE_CONTINUED.mp3");

    if (this.state.isFull === true) {
      return audio.play(); //<audio ref="audio_tag" src="./audio/TO_BE_CONTINUED.mp3" autoPlay />
    }
  }*/

  render() {
    return (
      <div onKeyDown={this.listener} tabIndex="0">
        <FullPageSections />
        <Header>
          <Fullscreen
            enabled={this.state.isFull}
            onChange={isFull => this.setState({ isFull })}
          >
            {this.renderBlueScreen()}
          </Fullscreen>
          <Button buttonID="homeBtn" buttonText="Home" click={this.goFull} />
          <Button
            buttonID="aboutMeBtn"
            buttonText="About Me"
            click={this.goFull}
          />
          <Button
            buttonID="contactBtn"
            buttonText="Contact"
            click={this.goFull}
          />
        </Header>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#container"));
