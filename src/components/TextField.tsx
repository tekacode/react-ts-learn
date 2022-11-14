import React, { useRef, useState } from 'react'

interface Props {
  text: string;
  age: number;
}

const TextField: React.FC<Props> = ({}) => {// TextFiel component expects you to pass Props
  const [count, setCount] = useState<number | null>(5)
  const inputRef = useRef<HTMLInputElement>(null);



  setCount(12) 
  setCount(null)


  return (
    <div>
      <input ref={inputRef}/>
    </div>
  )
}

export default TextField
