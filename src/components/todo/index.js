import React from "react";
import edit from './../../assets/edit.svg'
import deleteButton from './../../assets/deleteButton.svg'

function Todo({title,id,isDone,deleteTodo}){

    return(
        <div>
        {title}
        <button onClick={() => deleteTodo(id)}>X</button>
    </div>
    
        
    )
}

export default Todo