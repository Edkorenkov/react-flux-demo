import React from "react";

function Activities(props) {
  return (
    <div className="row">
      <div className="col">
        {props.activities && (
          <ul className="list-group">
            {props.activities.map((activity) => (
              <li key={activity.id} className="list-group-item">
                <h4>{activity.date}</h4>
                {activity.items.map((item) => (
                  <p key={item.id}>
                    {item.time} | {item.name}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Activities;
