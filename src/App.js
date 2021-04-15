import React from 'react'
import TodoList from './component/TodoList'
import TaskTodoList from './component/TaskTodoList'
import { BrowserRouter as Router,Link, Route } from 'react-router-dom'

function App() {
  return(
    <Router>
    <div>
      <Link to= "/stodolist">Simple TodoList</Link> |
      <Link to= "/todolist">TodoList</Link>

      <Route path= "/stodolist" component= {TodoList} />
      <Route path= "/todolist" component= {TaskTodoList} />
    </div>
    </Router>
  )
}

export default App;
