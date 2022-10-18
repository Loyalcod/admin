import { useState } from "react"

export default function TodoForm(props) {
    const [ newTodo, setNewTodo] = useState("")
    const addTodo = (e) =>{
        e.preventDefault()
        props.setTodos(prevTodos => {
            return [...prevTodos, {id: 1, title: newTodo, completed: false}]
        })
    }
  return (
    <div>
        <form>
            <input type="text" onChange={(e) => setNewTodo(e.target.value) } placeholder="Add Task" />
            <button onClick={addTodo}>Add</button>
        </form>
    </div>
  )
}
