
import './App.css';
import Counter from './Counter';
import TodoForm from './TodoForm';
import { useState } from 'react'

function App() {
  const [todo, setTodos] = useState([])
  return (
    <div className="App">
     <Counter />
     <TodoForm setTodos={setTodos} />
    </div>
  );
}

export default App;
