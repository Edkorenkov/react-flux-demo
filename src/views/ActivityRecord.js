import React from "react";
import Slide from "react-reveal/Slide";

function ActivityRecord(props) {
  return (
    <Slide {...{ bottom: true, duration: 400 }}>
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
    </Slide>
  );
}

export default ActivityRecord;
