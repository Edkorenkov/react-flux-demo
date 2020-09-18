import { ReduceStore } from "flux/utils";
import AppDispatcher from "../../AppDispatcher";
import AppActionTypes from "../../AppActionTypes";

class ActivitiesStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return [];
  }

  reduce(state, action) {
    switch (action.type) {
      case AppActionTypes.RECIEVE_ACTIVITIES:
        return [...state.activities, ...action.activities];
      default:
        return state;
    }
  }
}

export default new ActivitiesStore();
