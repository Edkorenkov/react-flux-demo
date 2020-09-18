import { ReduceStore } from "flux/utils";
import AppDispatcher from "../../AppDispatcher";
import AppActionTypes from "../../AppActionTypes";

class AppStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return {
      isLoad: false
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case AppActionTypes.LOAD:
        return {
          isLoad: true
        };
      default:
        return state;
    }
  }
}

export default new AppStore();
