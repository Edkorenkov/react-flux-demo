import AppDispatcher from "../../AppDispatcher";
import AppActionTypes from "../../AppActionTypes";
import ActivitiesManager from "../managers/ActivitiesManager";

export default {
  loadActivities() {
    AppDispatcher.dispatch({ type: AppActionTypes.ON_LOAD });
  },
  draftActivity() {
    AppDispatcher.dispatch({ type: AppActionTypes.DRAFT_ACTIVITY });
  },
  createActivity(value) {
    if (!value) return;

    AppDispatcher.dispatch({ type: AppActionTypes.CANCEL_ACTIVITY });

    ActivitiesManager.create(value)((activity) =>
      AppDispatcher.dispatch({ type: AppActionTypes.CREATE_ACTIVITY, activity })
    );
  },
  editActivity(value) {
    AppDispatcher.dispatch({ type: AppActionTypes.EDIT_ACTIVITY, value });
  },
  cancelActivity() {
    AppDispatcher.dispatch({ type: AppActionTypes.CANCEL_ACTIVITY });
  }
};
