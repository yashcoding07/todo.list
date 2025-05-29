import './index.css';
import Create from './Components/Create';
import Read from './Components/Read';

const App = () => {
  return (
    <div className="createtodo">
      <Create />
      <Read />
    </div>
  )
}

export default App