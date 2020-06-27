import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Todo = (props) => {
  const params = useParams();
  const todo = props.todos.find((todo) => {
    return todo.TodoId === Number(params.id);
  });
  return <div>{todo ? todo.TodoTitle : ""}</div>;
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
