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
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import MyRouting from './components/routing/MyRouting';
import Home from './components/Home';

const App:React.FC = () => {
  const [showText, setShowText] = useState(false)

  return (
    <div className="App">
     <span className="heading">Teka</span>

      {/* <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/myroute">| Router</Link>
          <Link to="/fetchapi">| Fetch Api</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/myroute' element={<MyRouting />} />
          <Route path='/fetchapi' element={<FetchApi />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router> */}

      {/* <FetchApi2 /> */}
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
