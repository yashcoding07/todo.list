import { createContext, useState } from "react"
export const contexttodo = createContext(null);

const Wrapper = (props) => {
    const [todos, settodos] = useState([
        { id: 1, title: "Kaam Karle Bhai", isCompleted: false }
    ]);
    return (
        <contexttodo.Provider value={[todos, settodos]}>
            {props.children}
        </contexttodo.Provider>
    )
}

export default Wrapper
// this page is used a wrapper to cover the full application to contain the common data in all the files and avoiding the use of state hooks