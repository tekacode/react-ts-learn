import React from 'react'
interface Props{
  todo:string;
  setTod: React.Dispatch<React.SetStateAction<string>>
}
const InputField:React.FC<Props> = ({todo, setTod}) => {
  return (
    <form>
      <input type="input" 
      placeholder="Enter task" 
      className="input_box" 
      value={todo}
      onChange={
        (e)=>setTod(e.target.value)
      }/>
      <button type="submit">Go</button>
    </form>
  )
}

export default InputField