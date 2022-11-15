import React from 'react'
import { useState } from "react"
import './Todo.css';
import Task from './Task'

const Todo = () => {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
      taskName: newTask,
      completed: false
    }
    const newTodoList = [...todoList, task]
    setTodoList(newTodoList)
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
        return task.id !== id
    })
    setTodoList(newTodoList)
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if(task.id === id){
          return {...task, completed: true}
        }else {
          return task;
        }
      })
    )
  }

  return (
    <div className='App'>
      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'></div>
      {todoList.map((task) =>{
        return (
              // <div className='task'>
              //    <h2>{task.taskName}</h2>
              //    <button onClick={() => deleteTask(task.id)}>X</button>
              //  </div>
                <Task 
                  taskName={task.taskName}
                  id={task.id} 
                  completed={task.completed}
                  deleteTask={deleteTask}
                  completeTask={completeTask}
                />
              )
      })}
    </div>
  )
}

export default Todo