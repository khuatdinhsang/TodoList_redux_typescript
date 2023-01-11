import React, { ChangeEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { addTodo,  deleteTodo, editTodo,  setTodo, toggleTodo } from "../actions/todo";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from '../interface';
const TodoList = () => {
    const dispatch = useDispatch()
    const todoInit = useSelector((state:any) => state.todoListReducer);
    const { list, todo } = todoInit;
    const [checked, setChecked] = useState<boolean>(false);
    const [id, setId] = useState<string|number>("");

    const handleSetItem = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(setTodo(e.target.value));
    };
    const handleADD = () => {
        if (checked) {
            dispatch(
                editTodo({
                    id,
                    todo
                })
            );
            setChecked(false);
        } else {
            dispatch(
                addTodo({
                    id: uuidv4(),
                    title: todo,
                    completed: false
                })
            );
        }
        dispatch(setTodo(""));
    };
    const handleDelete = (id:string|number) => {
        dispatch(deleteTodo(id));
    };
    const handleToggle = (id:string|number) => {
        dispatch(toggleTodo(id));
    };

    const handleEdit = (id:string|number) => {
        setChecked(true);
        const editItem = list.find((item:Todo) => item.id === id);
        dispatch(setTodo(editItem.title));
        setId(id);
    };
  return (
    <>
    <div>Todo</div>
    <input type="text" value={todo} onChange={handleSetItem} />
            <button onClick={handleADD}>ADD</button>
            {list.map((item:Todo) => {
                return (
                    <div key={item.id}>
                        <li
                            className={item.completed ? "active" : ""}
                            onClick={() => handleToggle(item.id)}
                        >
                            {item.title}
                        </li>
                        <button onClick={() => handleDelete(item.id)}>Xoa</button>
                        <button onClick={() => handleEdit(item.id)}>Edit</button>
                    </div>
                );
            })}
    </>
  )
}

export default TodoList