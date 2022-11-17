import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import TextField from './components/TextField';
import {Person} from './components/Person'
import Todo from './components/todo/Todo'
import Text from './components/Text'
import FetchApi from './components/fetch-data/FetchApi';
import FetchApi2 from './components/fetch-data/FetchApi2';

const App:React.FC = () => {
  const [showText, setShowText] = useState(false)

  return (
    <div className="App">
     <span className="heading">Taskfiy</span>

      <FetchApi2 />
      {/* <FetchApi /> */}
     
      {/* <button onClick={() => {
        setShowText(!showText)
      }}>
        Show Text
      </button>
     {showText && <Text />} */}

     {/* <InputField todo={todo} setTod={setTod}/> */}
     {/* <TextField text="Hello" age={5 }/> */}
     {/* <Person /> */}
     {/* <Todo /> */}
     
    </div>
    
  );
}
export default App;
