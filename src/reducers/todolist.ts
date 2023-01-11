import {v4 as uuidv4} from "uuid"
import { Counter, TodoList } from "../interface";
const initTodo = {
    list: [
        { id: uuidv4(), title: "sang", completed: true },
        { id: uuidv4(), title: "duy", completed: true },
        { id: uuidv4(), title: "duong", completed: true }
    ],
    todo: ""
};
export const todoListReducer = (state = initTodo, action:TodoList) => {
    switch (action.type) {
        case "SET":
            console.log(action.payload);
            
            return {
                ...state,
                todo: action.payload
            };
        case "ADD":
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        case "DELETE":
            return {
                ...state,
                list: state.list.filter((item) => item.id !== action.payload)
            };
        case "TOGGLE":
            console.log(action.payload);

            return {
                ...state,
                list: state.list.map((item) =>
                    item.id === action.payload
                        ? { ...item, completed: !item.completed }
                        : item
                )
            };
        case "EDIT":
            return {
                ...state,
                list: state.list.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, title: action.payload.todo }
                        : item
                )
            };
        default:
            return state;
    }
};