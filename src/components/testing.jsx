import React, { useState } from "react";
import {
  CustomInput,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { CustomMap } from "./CustomMap";

export const HelloGuys = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        isOpen={modalOpen}
        toggle={toggle}
        //wrapClassName="modal-right"
        backdrop="static"
      >
        <ModalHeader toggle={toggle}>Header</ModalHeader>
        <ModalBody>
          <CustomMap />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" outline onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" onClick={toggle}>
            Submit
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};
