import React from "react";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AppContext } from "../context/ApiContext";

export default props => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const history = useHistory();
  const { todos, addTodo } = useContext(AppContext);
  function handleChange(event) {
    const newValue = event.target.value;
    setContent(newValue);
  }

  function titleChange(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
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
        <button
          onClick={() => {
            addTodo(title, content);
            setContent("");
            setTitle("");
          }}
        >
          Add
        </button>
      </div>
      {todos.map((todo, index) => {
        return (
          <div
            onClick={() => {
              history.push(`/todo/${todo.id}`);
            }}
            className="list"
            key={index}
          >
            <div>ID:{todo.id}</div>
            <div className="title">Title:{todo.title}</div>
            <div>{todo.content}</div>
          </div>
        );
      })}
    </div>
  );
};
