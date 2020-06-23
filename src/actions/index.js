export const TODO_INFO = "TODO_INFO";

export const todoInfo = (id, title, content) => {
  return {
    type: TODO_INFO,
    TodoId: id,
    TodoTitle: title,
    TodoContent: content,
  };
};
