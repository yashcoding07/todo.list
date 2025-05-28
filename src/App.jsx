import { useState } from 'react';
import './index.css';
import Create from './Components/Create';
import Read from './Components/Read';

const App = () => {
  const [todos, settodos] = useState([
        { id: 1, title: "Kaam Karle Bhai", isCompleted: false }
    ]);

  return (
    <div className="createtodo">
      <Create todos={todos} settodos={settodos}/>
      <Read todos={todos} settodos={settodos}/>
    </div>
  )
}

export default App