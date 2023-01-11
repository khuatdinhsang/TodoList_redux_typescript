import { itemEdit, Todo } from "../interface";

export const addTodo = (data:Todo) => {
    return {
        type: "ADD",
        payload: data
    };
};
export const deleteTodo = (data:string|number) => {
    return {
        type: "DELETE",
        payload: data
    };
};
export const setTodo = (data:string) => {
    return {
        type: "SET",
        payload: data
    };
};
export const toggleTodo = (data:string|number) => {
    return {
        type: "TOGGLE",
        payload: data
    };
};
export const editTodo = (data:itemEdit) => {
    return {
        type: "EDIT",
        payload: data
    };
};