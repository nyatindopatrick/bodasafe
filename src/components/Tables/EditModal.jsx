import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditModal = props => {
  const { modalTitle, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button outline color="warning" onClick={toggle}>
        <i className="fas fa-edit"></i>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit {modalTitle}</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EditModal;

// const tableHeaderData = [sacco, status, Riders, Location, Reports, Actions];
// let tableHead = tabelHeaders.map(item => <td>item</td>)
// const tableBodyData = [{
//     name:"Kisumu Sacco" , status: "Active" , riders: 113, reports: "12"
// }]

// let tableBody = tableBodyData.map(item => < td>

// </td>)

// return (
//     <th>
//         tableHead
//   </th>
//     <tbody>
//         <td>tableBodyData.name</td>
//         td
//     </tbody>
// );
