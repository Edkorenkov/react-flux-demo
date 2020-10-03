import React from "react";
import Fade from "react-reveal/Fade";
import ActivityRecord from "./ActivityRecord";
import CreateActivityRecord from "./CreateActivityRecord";

function Activities(props) {
  return (
    <div className="row my-3 d-flex flex-column">
      <div className="col">
        <div className="row">
          {props.activities && (
            <div className="col">
              {props.activities.map((activity) => (
                <div key={activity.id} collapse bottom>
                  <h5 className="text-muted">{activity.date}</h5>
                  <Fade {...{ bottom: true }}>
                    <ul className="list-group">
                      {activity.records.map((record, key) => (
                        <ActivityRecord key={key} record={record} />
                      ))}
                    </ul>
                  </Fade>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="col bg-light position-fixed fixed-bottom px-5 py-2">
        <button
          className="btn btn-dark btn-block"
          onClick={(e) => props.onDraftActivity()}
        >
          New
        </button>
      </div>
      <div className="col">
        <CreateActivityRecord
          activity={props.activity}
          onEdit={props.onEditActivity}
          onCreate={props.onCreateActivity}
          onCancel={props.onCancelActivity}
        />
      </div>
    </div>
  );
}

export default Activities;
