import React, { useState, useEffect } from 'react'

const Text = () => {
  const [text, setText] = useState("")

  useEffect(() => {
    console.log("COMPONENT MOUNTED")

    return () => {
      console.log("COMPONENT UNMOUNTED")
    }

  }, [])// if you want useEffect to run once add empity array and you can add specifc element in the array to tigger 


  return (
    <div className='App'>
      <input
        onChange={(event) => {
          setText(event.target.value)
        }}
      />
      <h1>{text}</h1>

    </div>
  )
}

export default Text