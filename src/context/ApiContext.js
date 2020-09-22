import React, { createContext, useState, useEffect } from "react";
import { firestore } from "../firebase";

export const AppContext = createContext();

export const AppContextProvider = props => {
  const [todos, setTodos] = useState([]);

  function loadTodo() {
    const tmpTodos = [];
    firestore
      .collection("todos")
      .get()
      .then(data => {
        data.forEach(todo => {
          const data = todo.data();
          console.log(todo.data());
          tmpTodos.push({
            id: todo.id,
            title: data.title,
            content: data.content
          });
        });
        setTodos(tmpTodos);
      });
  }

  useEffect(() => {
    loadTodo();
  }, []);

  function addTodo(title, content) {
    firestore
      .collection("todos")
      .add({
        title: title,
        content: content
      })
      .then(() => {
        loadTodo();
      });
  }

  return (
    <AppContext.Provider value={{ todos, setTodos, addTodo }}>
      {props.children}
    </AppContext.Provider>
  );
};
