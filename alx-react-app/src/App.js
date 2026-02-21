import React, {useState} from 'react'

const App = () => {
    const array= useState(0);
    console.log (array)
  return (
    <div>
        <h1>Counter</h1>
        <button>increase</button>
    </div>
  )
}

export default App