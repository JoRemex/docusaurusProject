---
sidebar_position: 10
---

# RemoveTask.js


```jsx title="projetoEstagio/todo_list/src/RemoveTask.js"
import {
  Button
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { removeTask } from "./actions";

export default function RemoveTask({ open, setOpen, id }) {
  const dispatch = useDispatch();
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Deseja apagar esta tarefa?</DialogTitle>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancelar</Button>
        <Button
          onClick={() => {
            dispatch(removeTask(id));
            setOpen(false);
          }}
        >
          Apagar Tarefa
        </Button>
      </DialogActions>
    </Dialog>
  );
}
```
