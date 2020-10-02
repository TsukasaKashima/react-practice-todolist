import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";
import { AppContext } from "../context/ApiContext";

export default props => {
  const params = useParams();
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
  const [isOpenUpdateDialog, setIsOpenUpdateDialog] = useState(false);
  const { todos, updateTodo, deleteTodo } = useContext(AppContext);

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    const todo = todos.find(todo => {
      return todo.id === params.id;
    });
    if (todo) {
      setContent(todo.content);
      setTitle(todo.title);
    }
  }, [params.id, todos]);
  function handleChange(event) {
    const newValue = event.target.value;
    setContent(newValue);
  }
  function titleChange(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
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
              deleteTodo(params.id);
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
              updateTodo(params.id, title, content);
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
