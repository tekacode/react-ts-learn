import React from 'react'
import { useState } from "react"

const Todo = () => {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const newTodoList = [...todoList, newTask]
    setTodoList(newTodoList)
  }

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
        return task !== taskName
    })
    setTodoList(newTodoList)
  }
  return (
    <div>
      <div>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'></div>
      {todoList.map((task) =>{
        return (
              <div>
                 <h2>{task}</h2>
                 <button onClick={() => deleteTask(task)}>X</button>
               </div>
              )
      })}
    </div>
  )
}

export default Todo