import { useContext, useEffect } from "react";
import { Context } from "../../context";
import { Todo } from "../../models/Todo";
import api from "../../shared/utilities/api";
import styles from './list.module.css'
import TodoItem from "../todo-item/todo";

export default function TodosList (){
    const {state, dispatch} = useContext(Context);
    useEffect(() => {
        api.get('/todos')
        .then((r) => dispatch({type: 'get', payload: r.data}))
    }, [])

    return (
        <div className= {styles.container}> 
            <div className={styles.list}>{
                state.todos.length && state.todos.map((e) =>
                    <TodoItem key={e.id} todo={e}></TodoItem>
                )
            }                
            </div> 
        </div>
      );
}