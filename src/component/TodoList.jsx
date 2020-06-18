import React from "react";
import { useState } from "react";

export default () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [todoList, setTodolist] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setContent(newValue);
  }
  function titleChange(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }
  function addTodo() {
    const newTodo = { TodoTitle: title, TodoContent: content };
    const newTodoList = [...todoList, newTodo];
    setTodolist(newTodoList);
    setContent("");
    setTitle("");
    textAlert();
  }
  function textAlert() {
    if (title === "" || content === "") {
      alert("いずれかが未入力です");
    }
  }
  return (
    <div>
      <div className="header">
        <div className="form-block">
          <label>タイトル</label>
          <input
            id="input01"
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={titleChange}
          />
        </div>
        <div className="form-block">
          <label>内容</label>
          <input
            id="input02"
            type="text"
            placeholder="Enter Task"
            value={content}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTodo}>Add</button>
      </div>
      {todoList.map((todo, index) => {
        return (
          <div className="list" key={index}>
            <div className="title">Title:{todo.TodoTitle}</div>
            {todo.TodoContent}
          </div>
        );
      })}
    </div>
  );
};
