import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaTimesCircle } from "react-icons/fa";


export const VentanaModal = ({texto,DesactivarProveedor,Formulario,tamanio}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
      ShowModal();
    },[]);

  const ShowModal = () => {
    setShow(true);
  };
  const CloseModal = () => {
    setShow(false);
      DesactivarProveedor()
  };
  return (
    <>
      <Modal
        size={tamanio}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="bg-primary text-white p-3 mb-2">
          <Modal.Title>{texto}</Modal.Title>
          <div>
            <Button variant="light" onClick={CloseModal}>
              <FaTimesCircle />
            </Button>
          </div>
        </Modal.Header>
        <Modal.Body>
            <Formulario/>
        </Modal.Body>
      </Modal>
    </>
  );
};
