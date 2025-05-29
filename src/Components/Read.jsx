import { useContext } from "react";
import { toast } from "react-toastify";
import { contexttodo } from "../Wrapper";

const Read = () => {

    const[todos, settodos] = useContext(contexttodo);

    const deleteHandler = (id)=>{
        const filtertodo = todos.filter((todo)=> todo.id != id);
        settodos(filtertodo);
        toast.error("Todo deleted");
    }

    const renderTodos = todos.map(todos => {
        return( 
        <li key={todos.id}>{todos.title}
        <button onClick={() => deleteHandler(todos.id)}>Task Completed</button>
        </li>
    );
    })

    return (
        <>
            <hr></hr>
            <h2>Tasks to Complete</h2>
            <ol className='rendertodos'>{renderTodos}</ol>
        </>
    )
}

export default Read