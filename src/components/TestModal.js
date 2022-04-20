import ModalFooter from "../modals/components/ModalFooter";
import Modal from "../modals/components/Modal";
import ModalBody from "../modals/components/ModalBody";
import ModalHeader from "../modals/components/ModalHeader";
export default function TestModal(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>Test Modal #1</h3>
      </ModalHeader>
      <ModalBody>
        <p>Body of modal #1</p>
      </ModalBody>
      <ModalFooter>
        <button onClick={props.close} className="btn btn-primary">
          Close Modal
        </button>
      </ModalFooter>
    </Modal>
  );
}
