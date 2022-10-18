  import { useState } from 'react'

export default function Counter() {
  const [ count, setCount ] = useState(0)
  const handleIncrease = ()=>{
    setCount(count + 1)
  }
  const handleDecrease = ()=>{
    setCount(count - 1)
  }
  return (
    <div>
      <label>Button count: {count} </label><br />
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
  
}
