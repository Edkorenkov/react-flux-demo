import AppDispatcher from "../../AppDispatcher";
import AppActionTypes from "../../AppActionTypes";

export default {
  loadActivities() {
    AppDispatcher.dispatch({ type: AppActionTypes.ON_LOAD });

    setTimeout(() => {
      AppDispatcher.dispatch({
        type: AppActionTypes.RECIEVE_ACTIVITIES,
        activities: [
          {
            id: "1",
            date: "2020-09-18",
            userId: "1",
            records: [
              {
                id: "1",
                startedAt: "15:17",
                finishedAt: "15:19",
                name: "Reading the book"
              },
              {
                id: "2",
                startedAt: "15:17",
                finishedAt: "",
                name: "Work - retrospective"
              }
            ]
          }
        ]
      });
    }, 1000);
  }
};
