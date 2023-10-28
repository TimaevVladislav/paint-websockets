import React, {useRef, useState} from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import {Form} from "react-bootstrap"
import canvas from "../store/canvas"

const ModalName = () => {
    const [show, setShow] = useState(true)
    const userReference = useRef() as React.MutableRefObject<HTMLInputElement>

    const setCurrentUser = () => {
      canvas.setUserName(userReference.current.value)
      setShow(false)
    }

    return (
        <Modal show={show}>
            <Modal.Header closeButton>
                <Modal.Title>Write name</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Control ref={userReference} type="text" placeholder="Normal text" />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={setCurrentUser}>Login</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalName