import { useState } from "react";

const Read = (props) => {

    const todos = props.todos;
    const settodos = props.settodos;

    const renderTodos = todos.map(todos => {
        return <li key={todos.id}>{todos.title}</li>
    })

    return (
        <><hr></hr>
            <h2>Tasks to Complete</h2>
            <ol className='rendertodos'>{renderTodos}</ol>
        </>
    )
}

export default Read