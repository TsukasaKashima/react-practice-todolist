import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          TodoId: action.TodoId,
          TodoTitle: action.TodoTitle,
          TodoContent: action.TodoContent,
        },
      ];
    case DELETE_TODO:
      return state.filter((todo) => {
        return todo.TodoId !== Number(action.TodoId);
      });
    case UPDATE_TODO:
      const updateTodo = state.filter((todo) => {
        return todo.TodoId !== Number(action.TodoId);
      });
      return [
        ...updateTodo,
        {
          TodoId: action.TodoId,
          TodoTitle: action.TodoTitle,
          TodoContent: action.TodoContent,
        },
      ];
    default:
      return state;
  }
};

export default todos;
