import React from "react";
import Slide from "react-reveal/Fade";

function CreateActivityRecord(props) {
  return (
    <Slide {...{ duration: 300, bottom: true, when: props.activity.isOpen }}>
      {props.activity.isOpen && (
        <div className="d-flex align-items-end justify-content-center position-fixed fixed-bottom">
          <div className="card w-100 rounded-0 border-left-0 border-right-0 border-bottom-0">
            <div className="card-body container-lg px-5">
              <div className="form">
                <div className="form-group">
                  <label htmlFor="activity">
                    <small className="text-muted">Activity</small>
                  </label>
                  <input
                    id="activity"
                    type="text"
                    className="form-control"
                    value={props.activity.value}
                    onChange={(e) => props.onEdit(e.target.value)}
                  />
                </div>
                <div className="row btn-toolbar">
                  <div className="col pr-1">
                    <div className="btn-group btn-block">
                      <button
                        className="btn btn-primary"
                        onClick={(e) => props.onCreate(props.activity.value)}
                      >
                        Create
                      </button>
                    </div>
                  </div>
                  <div className="col pl-1">
                    <div className="btn-group btn-block">
                      <button
                        className="btn btn-secondary"
                        onClick={(e) => props.onCancel()}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Slide>
  );
}

export default CreateActivityRecord;
