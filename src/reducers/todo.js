import { ADD_TODO, DELETE_TODO } from "../actions";

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
        return todo.TodoId === Number(action.TodoId);
      });
    default:
      return state;
  }
};

export default todos;
