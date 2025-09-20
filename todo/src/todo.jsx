import {useState} from 'react';
import {v4 as uuid} from 'uuid';
import './todo.css';
export default function Todo(){
let [todos,setTodo] = useState([{task : "", id : uuid()  , isdone : false}]);
let[newTodo,setNewTodo] = useState("");



let addNewTodo = ()=>{
//setTodo([...todos,newTodo]);
setTodo((prevtodo) =>{
    return [...prevtodo,{task : newTodo, id : uuid() , isdone : false}];
});
setNewTodo("");
}




let updadetask = (e)=>{
    setNewTodo(e.target.value);
}


let deletetask =(id) =>{
 setTodo(todos.filter((todo) => todo.id != id));  
}

let deleteall =() =>{
    setTodo(todos.map((todo) =>{
        return {
            ...todo ,
            task : todo.task.toUpperCase(),
        };
    }))
};


let markasdone = () => {
    setTodo(todos.map((todo) => {
        return {
            ...todo,
            isdone: true,
        };
    }));
};

return (
    <div className='main'>
      <div>
        <input
          placeholder="add a task "
          type="text"
          className='input'
          value={newTodo}
          onChange={updadetask}
        />
      </div>
      <br />
      <button className='button' onClick={addNewTodo}>
        Add to task
      </button>
      <br />
      <br />
      <br />
      <hr />
      <h4>My Tasks</h4>
      <ul className='ul'>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span> {todo.task}</span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button  className ="button1" onClick={() => deletetask(todo.id) }>Delete</button>
            <button className ="button1" onClick={markasdone}>mark as done</button>
            {todo.isdone ? { textDecoration: "line-through", color : "Red" }: null};
          </li>
        ))}
      </ul>
      <button  className ="button1" onClick={deleteall} >mark as done all</button>
    </div>
  );
}