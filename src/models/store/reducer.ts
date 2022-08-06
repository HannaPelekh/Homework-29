import { Role, State } from "../State";
import { Todo } from "../Todo";

type CreateTodo = {type: "create", payload: Todo};
type UpdateTodo = {type: "update", payload: Todo};
type GetTodo = {type: "get", payload: Todo[]};
type DeleteTodo = {type: "delete", payload: number};
type ChangeRole = {type: "role", payload: Role};

export type Action = 
| CreateTodo 
| UpdateTodo 
| GetTodo 
| DeleteTodo 
| ChangeRole;

export function reducer(state: State, action: Action):State {
    switch(action.type) {
        case "create" :
            return {...state, todos:[...state.todos, action.payload]
        }
        case "update" :
            return {...state, todos: state.todos.map((e) =>
                e.id === action.payload.id ? action.payload: e)
        }
        case "get" :
            return {...state, todos: action.payload};
        case "delete" :
            return {...state, todos: state.todos.filter((e) => 
                e.id !==action.payload)
        }
        case "role" :
            return {...state, role: action.payload,
        }
        default: 
        return state
    }
}