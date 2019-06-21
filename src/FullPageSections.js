import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Button from "./Button";

const colours = ["#06d689", "#2ec4b6", "#e71d36", "#ff9f1c"];
const body = document.getElementsByTagName("body")[0];
const Section = props => {
  return <div className="section Container animate">{props.children}</div>;
};
const anchors = ["Welcome", "AboutMe", "Contact"];
let prevIndex;

const getCol = () => {
  let newIndex = Math.round(Math.random() * colours.length);
  while (prevIndex === newIndex) {
    newIndex = Math.round(Math.random() * colours.length);
  }
  if (prevIndex !== newIndex) {
    prevIndex = newIndex;
  }
  return newIndex;
};

const FullpageWrapper = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    //sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
    onLeave={(origin, destination, direction) => {
      body.style.backgroundColor = colours[getCol()];
    }}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <Section content={"Welcome to my Site!"}>
            <h1>Welcome to my Site!</h1>
            <p>Lorem ipsum</p>
          </Section>
          <Section content={"About Me"}>
            <h2>About Me</h2>
            <p>Lorem ipsum</p>
          </Section>
          <Section content={"Contact"}>
            <h2>Contact</h2>
            <p>Lorem ipsum</p>
          </Section>
        </div>
      );
    }}
  />
);

export default FullpageWrapper;
