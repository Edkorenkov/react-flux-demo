import React from "react";
import Activities from "./Activities";

function App(props) {
  return (
    <div className="container-md">
      <h3 className="text-center">Activities react-flux example</h3>
      {!props.app.isLoad && <div>Loading...</div>}
      {props.app.isLoad && <Activities {...props} />}
      <button
        className="btn btn-secondary btn-block mt-2"
        onClick={(e) => props.onLoadActivities(e)}
      >
        Load
      </button>
    </div>
  );
}

export default App;
