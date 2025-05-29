import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { contexttodo } from "../Wrapper";

const Create = () => {
    
    const[todos, settodos] = useContext(contexttodo);

    // const [title, settitle] = useState("");
    const {register,handleSubmit,reset} = useForm();// this all are provided by react hook forms

    const SubmitHandler = (data)=>{
    data.id = nanoid();
    data.isCompleted = false;
    
    // const newTodo = {
    //   id: nanoid()
    //   // title,
    //   isCompleted: false
    // };

    // we can do in both the ways we do this becoz the todos are read only and the settodos replace the value 
    // const copytodos = [...todos]
    // copytodos.push(newTodo);
    // settodos(copytodos);

    settodos([...todos,data]);

    toast.success("todo created");
    reset();
  };

  return (
    <>
      <h1>Your Personalised Task List</h1>
      <h2>Create Tasks</h2>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <input {...register("title")} type='text' placeholder='title' required/>
        <button type='submit'>Create Task</button>
      </form>
    </>
  )
}

export default Create

// onChange={(e)=>{e.target.value}} value={title} this is used when we do not use react hook forms
