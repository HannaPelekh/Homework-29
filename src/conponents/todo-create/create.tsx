import { Todo } from "../../models/Todo"; 
import { useContext, useState } from "react";
import styles from './create.module.css'
import { Context } from "../../context";
import api from "../../shared/utilities/api";

export default function CreateTodo() {    
    const [todo, setTodo] = useState({title: '', body: ''});
    const {dispatch} = useContext(Context);

    function  onCreateTodo () {
      api.post('/todos', {...todo, id: Date.now(), isComplete: false})
      .then((r) => dispatch({type: 'create', payload: r.data}))
      setTodo({title: '', body: ''})
    }
    return (
        <div className= {styles.create_container}>          
          <h2 className={styles.title_create}>Create Todo</h2>          
          <div className={styles.create_box}>
            <input
              className={styles.input_title}
              placeholder="Enter title"
              type="text" required  
              value={todo.title}
              onChange={(e) => setTodo({ ...todo, title: e.target.value })
            }
            />
            
            <input
              className={styles.input_body}
              placeholder="Enter body"
              type="text" required  
              value={todo.body}
              onChange={(e) => setTodo({ ...todo, body: e.target.value })
            }
            />
            <button className={styles.btn_add_todo}
            onClick={() => {onCreateTodo()}
            }
            >Create</button>
          </div>
        </div>
      );
}