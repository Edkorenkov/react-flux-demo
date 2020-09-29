import { ReduceStore } from "flux/utils";
import AppDispatcher from "../../AppDispatcher";
import AppActionTypes from "../../AppActionTypes";
import ActivitiesManager from "../managers/ActivitiesManager";

class ActivitiesStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    ActivitiesManager.load()((activities) =>
      AppDispatcher.dispatch({
        type: AppActionTypes.RECIEVE_ACTIVITIES,
        activities
      })
    );

    return [];
  }

  reduce(state, action) {
    switch (action.type) {
      case AppActionTypes.RECIEVE_ACTIVITIES:
        return [...action.activities];
      case AppActionTypes.CREATE_ACTIVITY: {
        let activity = state.find((x) => x.id === action.activity.id);
        let records = [...activity.records, { ...action.activity.record }];

        activity.records = records;

        return [...state];
      }
      default:
        return state;
    }
  }
}

export default new ActivitiesStore();
