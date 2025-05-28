import { useState } from "react";

const Read = (props) => {

    const todos = props.todos;
    const settodos = props.settodos;

    const deleteHandler = (id)=>{
        const filtertodo = todos.filter((todo)=> todo.id != id);
        settodos(filtertodo);
    }

    const renderTodos = todos.map(todos => {
        return( 
        <li key={todos.id}>{todos.title}
        <button onClick={() => deleteHandler(todos.id)}>Task Completed</button>
        </li>
    );
    })

    return (
        <><hr></hr>
            <h2>Tasks to Complete</h2>
            <ol className='rendertodos'>{renderTodos}</ol>
        </>
    )
}

export default Read