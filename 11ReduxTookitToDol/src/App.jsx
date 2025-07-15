import React from 'react'
import AddTodo from './components/Addtodo'
import Todos from './components/Todo'


function App() {
  return (
    <div>
      <h3>Redux toolkit</h3>
      <AddTodo/>
      <Todos/>
      
    </div>
  )
}

export default App