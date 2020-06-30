export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (id, title, content) => {
  return {
    type: ADD_TODO,
    TodoId: id,
    TodoTitle: title,
    TodoContent: content,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    TodoId: id,
  };
};
