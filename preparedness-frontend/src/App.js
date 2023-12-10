import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  const [userInput, setUserInput] = useState("")

  // Function to make the input box empty when reset button is clicked
  const resetButton = () => {
    setUserInput("")
  }
  // Saving the users name to usestate variable
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="entire-content">
      <div className="header">
        <p>Preparedness Assessment</p>
      </div>
      <div className="form">
        <div className="input">
          <div className="label"><Label for="name">Enter your name</Label>
          </div>
          <div className="user-input-container">
            <Input
            type="text"
            placeholder=""
            value={userInput}
            onChange={handleChange}
            />
            </div>
        </div>
        <div className="buttons-container">
          <ModalComponent name={userInput} />
          <button type="button" className="button-style" onClick={resetButton}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
