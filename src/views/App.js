import React from "react";
import TodoList from "./TodoList";

function App(props) {
  return (
    <div className="container-md">
      <h3 className="text-center">Activities react-flux example</h3>
      {props.ac.isLoad && <div>Loading...</div>}
      {!props.todoList.isLoad && <TodoList {...props} />}
      <button
        className="btn btn-secondary btn-block mt-2"
        onClick={(e) => props.onLoadTodos(e)}
      >
        Load
      </button>
    </div>
  );
}

export default App;
