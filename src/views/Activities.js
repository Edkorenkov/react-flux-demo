import React from "react";
import Fade from "react-reveal/Fade";

function Activities(props) {
  return (
    <div className="row mt-5">
      {props.activities && (
        <div className="col">
          {props.activities.map((activity) => (
            <div key={activity.id} collapse bottom>
              <h5 className="text-muted">{activity.date}</h5>
              <Fade top cascade>
                <ul className="list-group">
                  {activity.records.map((record) => (
                    <li
                      key={record.id}
                      className="list-group-item d-flex align-items-center"
                    >
                      <div className="font-weight-light d-flex flex-column">
                        <small className="text-success">
                          {record.startedAt}
                        </small>
                        <small className="text-danger">
                          {record.finishedAt || "..."}
                        </small>
                      </div>
                      <div className="mx-5">{record.name}</div>
                    </li>
                  ))}
                </ul>
              </Fade>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Activities;
