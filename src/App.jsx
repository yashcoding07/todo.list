import { useState } from 'react';
import './index.css';

const App = () => {
  const [todos, settodos] = useState([
    {id: 1, title: "Kaam Karle Bhai", isCompleted: false}
  ]);

  const [title, settitle] = useState("");
  const SubmitHandler = (e)=>{
    e.preventDefault();
  }

  return (
    <div>
      <h1>Create Tasks</h1>
      <form onSubmit={SubmitHandler}>
        <input  type='text' placeholder='title' onChange={(e)=> settitle(e.target.value)} value={title}/><br></br>
        <button type='submit'>Create Task</button>
      </form>
    </div>
  )
}

export default App