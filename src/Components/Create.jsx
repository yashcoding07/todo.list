import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;

    const [title, settitle] = useState("");

    const SubmitHandler = (e)=>{
    e.preventDefault();

    const newTodo = {
      id: nanoid(),
      title,
      isCompleted: false
    };

    // we can do in both the ways we do this becoz the todos are read only and the settodos replace the value 
    // const copytodos = [...todos]
    // copytodos.push(newTodo);
    // settodos(copytodos);

    settodos([...todos,newTodo]);
    settitle('');
  };

  return (
    <><h1>Your Personalised Task List</h1>
      <h2>Create Tasks</h2>
      <form onSubmit={SubmitHandler}>
        <input  type='text' placeholder='title' onChange={(e)=> settitle(e.target.value)} value={title} required/>
        <button type='submit'>Create Task</button>
      </form>
    </>
  )
}

export default Create