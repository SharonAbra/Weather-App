import React from "react";
import { useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

export default function Validation({ show, onHide }) {
  const invalidCity = useSelector((state) => state.invalidCity);

  return (
    <>
      <Modal
        show={show}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onEscapeKeyDown={onHide}
      >
        <Modal.Body>
          <h4>Let's try again...</h4>
          <p>
            {invalidCity
              ? `That is not a city name.`
              : "Please type English letters only."}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
