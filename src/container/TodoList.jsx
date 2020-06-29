import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addTodo } from "../actions";
import { connect } from "react-redux";

const TodoList = (props) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
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
    props.addTodo(generateId(), title, content);
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
      {props.todos.map((todo, index) => {
        return (
          <div
            onClick={() => {
              history.push(`/todo/${todo.TodoId}`);
            }}
            className="list"
            key={index}
          >
            <div>ID:{todo.TodoId}</div>
            <div className="title">Title:{todo.TodoTitle}</div>
            <div>{todo.TodoContent}</div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (id, title, content) => dispatch(addTodo(id, title, content)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
