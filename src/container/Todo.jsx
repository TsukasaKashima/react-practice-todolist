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
  const [content, setContent] = useState(todo ? todo.TodoContent : "");
  const [title, setTitle] = useState(todo ? todo.TodoTitle : "");
  function handleChange(event) {
    const newValue = event.target.value;
    setContent(newValue);
  }
  function titleChange(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }
  function updateTodo() {
    props.updateTodo(params.id, title, content);
  }
  return (
    <React.Fragment>
      <div className="todoList">
        <div className="title">
          Title:
          <input type="text" value={title} onChange={titleChange} />
        </div>
        <input type="text" value={content} onChange={handleChange} />
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
              setTitle("");
              setContent("");
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
              updateTodo();
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
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  updateTodo: (id, title, content) => dispatch(updateTodo(id, title, content)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
