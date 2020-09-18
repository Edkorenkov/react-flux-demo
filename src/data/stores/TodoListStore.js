import { ReduceStore } from "flux/utils";
import AppDispatcher from "../../AppDispatcher";
import AppActionTypes from "../../AppActionTypes";

class TodoListStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return {
      isLoad: false,
      todos: [
        {
          id: 1,
          text: "My first todo",
          isCompleted: false
        }
      ]
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case AppActionTypes.LOAD_TODOS:
        return {
          ...state,
          isLoad: true
        };
      case AppActionTypes.RECIEVE_TODOS:
        return (state = {
          isLoad: false,
          todos: [...state.todos, ...action.data]
        });
      default:
        return state;
    }
  }
}

export default new TodoListStore();
