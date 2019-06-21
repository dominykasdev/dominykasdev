import React from "react";

class Music extends React.Component {
  state = {
    play: false
  };
  audio = new Audio("./audio/TO_BE_CONTINUED.mp3");

  togglePlay = () => {
    console.log(this.state.play);
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  };

  render() {
    return <div>{this.togglePlay()}</div>;
  }
}

export default Music;
