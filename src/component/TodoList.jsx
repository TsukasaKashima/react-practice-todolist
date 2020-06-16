import React from "react";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState("");
  const [todoList, setTodolist] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setValue(newValue);
  }

  function addTodo() {
    const newTodo = { content: value };
    const newTodoList = [todoList, newTodo];
    //const newTodoList = todoList.concat(newTodo);でもOk
    //todoListという配列[]に{ content: value }を入れているのが15行目のコード
    setTodolist(newTodoList);
    setValue("");
  }

  return (
    <div>
      <div className="header">
        <input
          type="text"
          placeholder="enter task"
          value={value}
          onChange={handleChange}
        />
        <button onClick={addTodo}>add</button>
      </div>
      {todoList.map((todo, index) => {
        return (
          <div className="list" key={index}>
            content: {todo.content}
          </div>
        );
      })}
    </div>
  );
};
