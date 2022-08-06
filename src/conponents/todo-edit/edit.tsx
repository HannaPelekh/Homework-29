
import { Todo } from "../../models/Todo"; 
import { useState } from "react";
export default function EditTodo() {
  const initialState: Todo = { id: 1, title: "", body: "", isComplete: false };
  const [todo, setTodo] = useState(initialState);
  return (
    <div className="actions-container">
      <div className="actions_box">
      <h2 className="title_actions">Edite Todo</h2>
        <input
          aria-label="Search"
          className="input_title"
          type="text" required  
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <input 
          aria-label="Search"
          className="input_body"
          type="text" required  
          value={todo.body}
          onChange={(e) => setTodo({ ...todo, body: e.target.value })}
        />
        <button className="btn_add_todo" onClick= {() => null}
        // {onEditeTodo}
        >Edite Todo</button>
      </div>
    </div>
  );
}