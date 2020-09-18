import AppDispatcher from "../../AppDispatcher";
import AppActionTypes from "../../AppActionTypes";

export default {
  loadActivities() {
    AppDispatcher.dispatch({ type: AppActionTypes.LOAD_ACTIVITIES });

    setTimeout(() => {
      AppDispatcher.dispatch({
        type: AppActionTypes.RECIEVE_ACTIVITIES,
        activities: [
          {
            id: "1",
            date: "2020-09-18",
            userId: "1",
            items: [
              {
                id: "1",
                time: "15:17",
                name: "Reading the book"
              },
              {
                id: "2",
                time: "15:19",
                name: "Work - retrospective"
              }
            ]
          }
        ]
      });
    }, 1000);
  }
};
