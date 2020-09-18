import AppDispatcher from "../../AppDispatcher";
import AppActionTypes from "../../AppActionTypes";

export default {
  loadTodos() {
    AppDispatcher.dispatch({ type: AppActionTypes.LOAD_TODOS });

    setTimeout(() => {
      AppDispatcher.dispatch({
        type: AppActionTypes.RECIEVE_TODOS,
        data: [
          {
            id: 2,
            text: "My second todo",
            isCompleted: false
          },
          {
            id: 3,
            text: "My third todo",
            isCompleted: false
          },
          {
            id: 4,
            text: "The last",
            isCompleted: false
          }
        ]
      });
    }, 1000);
  }
};
