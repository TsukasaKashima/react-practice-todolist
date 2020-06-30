import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { deleteTodo } from "../actions";

const Todo = (props) => {
  const params = useParams();
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
  const todo = props.todos.find((todo) => {
    return todo.TodoId === Number(params.id);
  });
  return (
    <React.Fragment>
      <div>{todo ? todo.TodoTitle : ""}</div>
      <Button
        onClick={() => {
          setIsOpenDeleteDialog(true);
        }}
      >
        削除する
      </Button>
      <Dialog open={isOpenDeleteDialog}>
        <DialogContent>
          <DialogContentText>Todoを削除しますか？</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setIsOpenDeleteDialog(false);
            }}
          >
            キャンセル
          </Button>
          <Button
            onClick={() => {
              props.deleteTodo(params.id);
              setIsOpenDeleteDialog(false);
            }}
          >
            削除する
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

const mapStateToProps = ({ todos }) => {
  return { todos: todos };
};

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
