import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import TextField from './components/TextField';

let name: string = "Teka Fisseha";
let age: number = 5
let role: [number,string]
let book: string | number
role = [5,"dog"]
let food: any //not recomended 
let country: unknown //recomended 
let ageFunc: (age: number) => number;//returns number 
let printName: (name: string) => void;//returns undefined 
let printSomething: (name: string) => never;//returns anyting
interface Person {
  name:string;
  age:number;
}
 
const App:React.FC = () => {
  const [todo, setTod] = useState<string>("")
  console.log(todo)
  return (
    <div className="App">
     <span className="heading">Taskfiy</span>
     <InputField todo={todo} setTod={setTod}/>
     <TextField text="Hello" age={5 }/>
    </div>
    
  );
}
export default App;
