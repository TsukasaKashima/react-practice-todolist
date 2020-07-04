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
import { updateTodo } from "../actions";

const Todo = (props) => {
  const params = useParams();
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
  const [isOpenUpdateDialog, setIsOpenUpdateDialog] = useState(false);
  const todo = props.todos.find((todo) => {
    return todo.TodoId === Number(params.id);
  });
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  function handleChange(event) {
    const newValue = event.target.value;
    setContent(newValue);
  }
  function titleChange(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }
  /*function updateTodo() {
    props.updateTodo(title, content);
  }*/
  return (
    <React.Fragment>
      <div className="todoList">
        <div className="title">
          Title:
          <input
            type="text"
            value={todo ? todo.TodoTitle : ""}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          value={todo ? todo.TodoContent : ""}
          onChange={titleChange}
        />
      </div>
      <div className="btns">
        <Button
          onClick={() => {
            setIsOpenUpdateDialog(true);
          }}
        >
          更新する
        </Button>
        <Button
          onClick={() => {
            setIsOpenDeleteDialog(true);
          }}
        >
          削除する
        </Button>
      </div>
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
      <Dialog open={isOpenUpdateDialog}>
        <DialogContent>
          <DialogContentText>Todoを更新しますか？</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setIsOpenUpdateDialog(false);
            }}
          >
            キャンセル
          </Button>
          <Button
            onClick={() => {
              props.updateTodo(title, content);
              setIsOpenUpdateDialog(false);
            }}
          >
            更新する
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
  deleteTodo: (id, title, content) => dispatch(deleteTodo(id, title, content)),
  updateTodo: (title, content) => dispatch(updateTodo(title, content)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
