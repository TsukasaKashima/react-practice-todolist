import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [todoList, setTodolist] = useState([]);
  const history = useHistory();

  function handleChange(event) {
    const newValue = event.target.value;
    setContent(newValue);
  }

  function titleChange(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  function generateId() {
    return Number(Math.random().toString().substr(2, 9));
  }

  function addTodo() {
    const newTodo = {
      id: generateId(),
      TodoTitle: title,
      TodoContent: content,
    };
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
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={titleChange}
          />
        </div>
        <div className="form-block">
          <label>内容</label>
          <input
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
          <div
            onClick={() => {
              history.push(`/todo/${todo.id}`);
            }}
            className="list"
            key={index}
          >
            <div>ID:{todo.id}</div>
            <div className="title">Title:{todo.TodoTitle}</div>
            <Link to={`/todo/${todo.id}`}>{todo.TodoContent}</Link>
          </div>
        );
      })}
    </div>
  );
};
