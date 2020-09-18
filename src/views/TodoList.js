import React from "react";

function TodoList(props) {
  return (
    <div className="row">
      <div className="col">
        {props.todoList && (
          <ul className="list-group">
            {props.todoList.todos.map((todoItem, index) => (
              <li key={index} className="list-group-item">
                {todoItem.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TodoList;
