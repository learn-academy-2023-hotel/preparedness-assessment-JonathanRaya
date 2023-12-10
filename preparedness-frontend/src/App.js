import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  
  const [userInput, setUserInput] = useState("")

  // Function to make the input box empty when reset button is clicked
  const resetButton = () => {
    setUserInput('')
  }
// Saving the users name to usestate variable
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input 
          type='text'
          placeholder=''
          value={userInput}
          onChange={handleChange}
          />
        </div>
        <ModalComponent name={userInput}/>
        <Button onClick={resetButton}>Reset</Button>
      </div>
    </div>
  )
}

export default App
