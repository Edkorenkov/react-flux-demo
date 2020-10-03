import React from "react";

function ActivityRecord(props) {
  return (
    <li
      key={props.record.id}
      className="list-group-item d-flex align-items-center"
    >
      <div className="font-weight-light d-flex flex-column">
        <small className="text-success">{props.record.startedAt}</small>
        <small className="text-danger">
          {props.record.finishedAt || "..."}
        </small>
      </div>
      <div className="mx-5">{props.record.name}</div>
    </li>
  );
}

export default ActivityRecord;
