import React from "react";
import Activities from "./Activities";

function App(props) {
  return (
    <div className="container-md pb-2">
      <h3>React-flux sandbox</h3>
      {!props.app.isLoad && <div>Loading...</div>}
      {props.app.isLoad && <Activities {...props} />}
    </div>
  );
}

export default App;
