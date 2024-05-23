import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import {Task} from './components/Task'

const App = () => {
  const[task,setTask]=useState(Task);

  useState(()=>{
    setTask(task)
  })

  const RegistroTask=(obj)=>{
    setTask([...task,{
      id:task.length,
      title:obj.title,
      description:obj.description
    }])
  }

  const deleteTask=(taskId)=>{
    setTask(task.filter(tasks=>tasks.id !== taskId))
  }

  return (
    <div className="TaskList">
      <h1>Lista de Tareas</h1>
      <TaskForm RegistroTask={RegistroTask}/>
      <TaskList task={task} deleteTask={deleteTask}/>
    </div>
  )
}

export default App




