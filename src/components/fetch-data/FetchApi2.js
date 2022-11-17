import React, { useEffect, useState } from 'react'
import Axios from "axios"

const FetchApi2 = () => {
  const [name, setName] = useState("")
  const [predictedAge, setPredictedAge] = useState({})

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`)
      .then((res) => {
        console.log(res.data)
        setPredictedAge(res.data)
      })
  }
  return (
    <div clasName="App">
      <input type="text"
        onChange={(event) => { setName(event.target.value) }}
        placeholder='Ex. Teka...' />

      <button onClick={fetchData}>Predict Age</button>

      <h1>Predicted Age: {predictedAge.name}</h1>
      <h1>Predicted Age: {predictedAge.age}</h1>
      <h1>Predicted Age: {predictedAge.count}</h1>
    </div>
  )
}

export default FetchApi2