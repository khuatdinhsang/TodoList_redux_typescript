export interface Todo{
    id:string|number,
    title:string,
    completed:boolean
}

export interface Counter{
    type:string,
    payload:number,
}
export interface TodoList{
    type:string,
    payload:{
        id?:string|number,
        todo?:Todo
    }
}
export interface itemEdit{
    id:string|number,
    todo:Todo
}