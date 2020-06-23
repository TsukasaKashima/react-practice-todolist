import { TODO_INFO } from "../actions";

const todos = (state = [], action) => {
  switch (action.type) {
    case TODO_INFO:
      return [
        ...state,
        {
          TodoId: action.Todoid,
          TodoTitle: action.TodoTitle,
          TodoContent: action.TodoContent,
        },
      ];
    default:
      return state;
  }
};

export default todos;
