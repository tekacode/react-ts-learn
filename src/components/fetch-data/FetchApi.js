import React, { useState, useEffect } from 'react'
import Axios from "axios"



const FetchApi = () => {
  const [catFact, setCatFact] = useState("")
  // fetch("https://catfact.ninja/fact")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data)
  //   })
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact)
    })
  }
  useEffect(() => {
    fetchCatFact()
  }, []) // the empity array allows the useEffect to run once when component mount
  return (
    <div className='App'>
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  )
}

export default FetchApi