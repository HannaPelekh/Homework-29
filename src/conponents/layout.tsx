import TodosList from "./todo-list/list"
import CreateTodo from "./todo-create/create"
import { useContext } from "react"
import { Context } from "../context"
import styles from '../App.module.css'
export default function Layout (){
    const { state, dispatch} = useContext(Context)
    return (
        <div>
            <div className= {styles.container_layaot}>                
                <button className= {styles.change_role_btn} onClick={() => {
                    dispatch({type: 'role', payload: state.role === 'admin' ? 'user' : 'admin'
                    })}}>{state.role}</button> 
                <CreateTodo></CreateTodo> 
            </div>
            <TodosList></TodosList>
        </div>
    )
}
