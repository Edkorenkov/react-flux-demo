import React from "react";
import Activities from "./Activities";
import TransitionGroup from "react-transition-group/TransitionGroup";

function App(props) {
  return (
    <div className="container-md pb-2">
      <h3>React-flux sandbox</h3>
      {!props.app.isLoad && <div>Loading...</div>}
      {props.app.isLoad && (
        <TransitionGroup>
          <Activities {...props} />
        </TransitionGroup>
      )}
    </div>
  );
}

export default App;
