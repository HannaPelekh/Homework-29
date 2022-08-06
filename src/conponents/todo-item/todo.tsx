import { Todo } from "../../models/Todo";
import styles from './todo.module.css'
import { Context } from "../../context";
import { useContext } from "react";
import api from "../../shared/utilities/api";
import { useState } from "react";
export default function TodoItem ({todo}: {todo: Todo}) {  
  const {state, dispatch} = useContext(Context);
  const [editMode, setMod] = useState(false)
  const [todoEdit, setTodo] = useState(todo)
  function onDeleteTodo() {
    api.delete('todos/' + todo.id)
      .then((r) => r && dispatch({type: "delete", payload: todo.id}))      
  }    
  function onCompleteTodo() {
    api.put('todos/' + todo.id, {...todo, isComplete: true})
      .then((r) => {dispatch({type: "update", payload: r.data})})
  }  
  function onAddTodo() {
    api.put('todos/' + todo.id, {...todo, title: todoEdit.title, body: todoEdit.body})
      .then((r) => {dispatch({type: "update", payload: r.data})
      console.log(todoEdit)
      setMod(false)
    })
  }
    return (
        <div className={todo.isComplete ? `${styles.isComplete}` : `${styles.todo_items}`}>
          {
            state.role === 'admin' ? <button aria-label="close_btn" className={styles.close_btn}
               onClick={()=> {onDeleteTodo()}}          
          ></button> : <button aria-label="close_btn" className={styles.hidden_btn}></button>
          }          
          <div className={styles.todo_box}>            
              <div className={styles.complete_btn_container}>
                <button aria-label={styles.complete_btn} 
                onClick={()=> {onCompleteTodo()}} 
                className={todo.isComplete ? `${styles.hidden_btn}` : `${styles.complete_btn}`} 
                ></button>
              </div>
              <div className={styles.text_container}>{
                !editMode ? <div className={styles.text_box}>
                  <div className={styles.title}>{todo.title}</div>
                  <div className={styles.body}>{todo.body}</div>      
                </div> : <div className={styles.edit_box}>
                  <input type='text' required 
                  className={styles.edit_title}
                  placeholder={todo.title}               
                  value={todoEdit.title}                  
                  onInput = {(e) => setTodo({...todoEdit, title: (e.target as any).value})}                  
                  />
                  <input type='text' required 
                  className={styles.edit_body}
                  placeholder={todo.body}               
                  value={todoEdit.body}
                  onInput = {(e) => setTodo({...todoEdit, body: (e.target as any).value})} 
                  />
                </div>}
              </div> 
            </div>          
          <button className={styles.edit_btn} 
          onClick= {()=> {!editMode ? setMod(!editMode) : onAddTodo()}}>
          {!editMode ? "Edit Todo" : "Add Todo"}</button>
        </div>
      );
}


