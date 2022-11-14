import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import TextField from './components/TextField';
import {Person} from './components/Person'
import Todo from './components/todo/Todo'

const App:React.FC = () => {
  return (
    <div className="App">
     <span className="heading">Taskfiy</span>
     {/* <InputField todo={todo} setTod={setTod}/> */}
     {/* <TextField text="Hello" age={5 }/> */}
     {/* <Person /> */}
     <Todo />
    </div>
    
  );
}
export default App;
