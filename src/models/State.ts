
import {Todo } from "./Todo";
export type Role = 'admin' | 'user'
export interface State {
    role: Role;
    todos: Todo[];    
    currentTodo: Todo| null;
}