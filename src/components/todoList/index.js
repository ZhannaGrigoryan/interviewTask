import React,{useState} from "react";
import Todo from "../todo";

function TodoList(){

const [input,setInput] = useState('')
const [todoes,setTodoes] = useState([])


function handleInput(e){
    setInput(e.target.value)
}


function addTodo () {
  console.log(input)
    setTodoes (prev => ([...prev, {title: input, id:Math.random(),isDone:false}]));
    setInput('')
  }
  
  function deleteTodo(id){
    setTodoes (prev => prev.filter(todo => todo.id !== id))
  }
  

    return (

        <div className = 'list'>
          <div>
          <input onChange={handleInput} type='text' value ={input}/>
          <button onClick={addTodo} >Add todo</button>
          {todoes.map(item=>< Todo deleteTodo={deleteTodo} key={item.id} {...item}/>)}
          </div>
          
        </div>
    )
}

export default TodoList