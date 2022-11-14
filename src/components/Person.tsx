import {ChangeEvent, FC, useState} from 'react'

export enum HairColor{
  Blond = "Your color is Blond",
  Pink = "Your color is Pink",
  Brown = "Your color is Brown"
}
interface Props{
  name?: string;
  age?: number;
  email?: string;
  hairColor?: HairColor
}

export const Person: FC<Props> = ({name,age,email,hairColor}) => {
  const [country, setCountry] = useState<string | null>(null)
  const [showText, setShowText] = useState<boolean>(false)
  const [emailColor, setEmailColor] = useState("red")

  type NameType = "Teka" | "Fisseha"
  const nameForType: NameType = "Fisseha"

  const handleChange = (evnet: ChangeEvent<HTMLInputElement>) => {
    setCountry(evnet.target.value)
  }

  const showHide = () => {
    setShowText(!showText)
  }

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1 style={{color:emailColor}}>{email}</h1>
      <input 
        placeholder='Write down your country...' 
        onChange={handleChange}
        />
      <br />
      {country}
      <br />
      {/* {HairColor.Blond} */}
      {hairColor}
      <br />
      <button onClick={() => setShowText(!showText)}>Show/Hide</button>
      {/* <button onClick={() => {emailColor === "red"? "red":"blue"}}>Email color</button> */}
      <br />
      {showText && <h2>This is Teka</h2>}
    </div>
  )
}