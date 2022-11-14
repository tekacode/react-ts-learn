import React, {useState} from 'react'

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

const DataTypes:React.FC = () => {
  const [todo, setTod] = useState<string>("")
  console.log(todo)
  return (
    <div>DataTypes</div>
  )
}

export default DataTypes