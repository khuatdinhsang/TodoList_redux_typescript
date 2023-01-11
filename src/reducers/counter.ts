import { Counter } from "../interface";

const initCounter =100
export const counterReducer = (state = initCounter, action:Counter) => {
    switch (action.type) {
        case "UP":
            return state + action.payload;
        case "DOWN":
            return state - action.payload;
        default:
            return state;
    }
};