import React, { useState } from "react"
import "../App.css"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap"

const ModalComponent = (props) => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)


  return (
    <>
      <div>
        <button type="button" className="button-style"  onClick={toggle}>
          Click Me
        </button>
        <Modal isOpen={modal} toggle={toggle} {...props}>
          <ModalHeader toggle={toggle}>
            Hello there {props.name}! </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
        </Modal>
      </div>
    </>
  )
}

export default ModalComponent
