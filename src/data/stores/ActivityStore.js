import { ReduceStore } from "flux/utils";
import AppDispatcher from "../../AppDispatcher";
import AppActionTypes from "../../AppActionTypes";

class ActivityStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return {
      isOpen: false,
      value: ""
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case AppActionTypes.DRAFT_ACTIVITY:
        return { isOpen: true, value: "" };
      case AppActionTypes.EDIT_ACTIVITY:
        return { isOpen: true, value: action.value };
      case AppActionTypes.CANCEL_ACTIVITY:
        return { ...state, isOpen: false };
      default:
        return state;
    }
  }
}

export default new ActivityStore();
