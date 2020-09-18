import { Container } from "flux/utils";
import App from "./views/App";
import TodoListStore from "./data/stores/TodoListStore";
import TodoListActions from "./data/actions/TodoListActions";

export default Container.createFunctional(
  App,
  () => [TodoListStore],
  () => ({
    todoItem: {},
    todoList: TodoListStore.getState(),

    onLoadTodos: TodoListActions.loadTodos
  })
);
