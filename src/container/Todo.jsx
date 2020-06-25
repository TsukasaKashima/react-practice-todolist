import React from "react";
import { connect } from "react-redux";
import { todoInfo } from "../actions/";

const Todo = (props) => {
  return <div>{props.todoInfo}</div>;
};

const mapStateToProps = ({ todoInfo }) => {
  return { todoInfo: todoInfo };
};

const mapDispatchToProps = (dispatch) => ({ todoInfo });

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
