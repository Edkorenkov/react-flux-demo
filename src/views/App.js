import React from "react";
import Activities from "./Activities";
import Fade from "react-reveal/Fade";
import TransitionGroup from "react-transition-group/TransitionGroup";

function App(props) {
  return (
    <div className="container-md">
      <h3>Activities react-flux example</h3>
      {!props.app.isLoad && <div>Loading...</div>}
      {props.app.isLoad && (
        <TransitionGroup>
          <Activities {...props} />
        </TransitionGroup>
      )}
      <button onClick={(e) => props.onCreateActivity()}>Click</button>
    </div>
  );
}

export default App;
