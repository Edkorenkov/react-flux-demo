import AppDispatcher from "../../AppDispatcher";
import AppActionTypes from "../../AppActionTypes";
import ActivitiesManager from "../managers/ActivitiesManager";

export default {
  loadActivities() {
    AppDispatcher.dispatch({ type: AppActionTypes.ON_LOAD });
  },
  createActivity() {
    ActivitiesManager.create()((activity) =>
      AppDispatcher.dispatch({ type: AppActionTypes.CREATE_ACTIVITY, activity })
    );
  }
};
