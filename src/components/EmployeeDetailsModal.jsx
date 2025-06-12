import React, { Fragment, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@atlaskit/button/new";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";
import EmployeeDetailsTab from "./EmployeeDetailsTab";
import { useEmployees } from "../context/EmployeeContext";
import { StyledImage, StyledDiv } from "./styles";

const EmployeeDetailsModal = ({ employee }) => {
  const { dispatch, state } = useEmployees();
  const { shortlistedEmployees } = state;

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState("large");

  const closeModal = useCallback(() => setIsOpen(false), [setIsOpen]);
  const setWidthAndOpen = useCallback(
    (newWidth) => {
      setWidth(newWidth);
      requestAnimationFrame(() => setIsOpen(true));
    },
    [setWidth, setIsOpen]
  );

  const handleShortList = () => {
    // add employee ot shortlisted list
    // closeModal();
    dispatch({ type: "ADD_TO_SHORTLISTED_EMPLOYEES", payload: employee });
  };
  return (
    <Fragment>
      <Button appearance="danger" onClick={() => setWidthAndOpen("large")}>
        Details
      </Button>

      <ModalTransition>
        {isOpen && (
          <Modal onClose={closeModal} width={width}>
            <ModalHeader hasCloseButton>
              <StyledDiv>
                <StyledImage
                  src={employee.image}
                  alt={`${employee.firstName}'s image`}
                />

                {`${employee.firstName} ${employee.lastName} - Details`}
              </StyledDiv>
            </ModalHeader>
            <ModalBody>
              <EmployeeDetailsTab employeeDetails={employee} />
            </ModalBody>
            <ModalFooter>
              <Button appearance="subtle" onClick={closeModal}>
                Cancel
              </Button>
              <Button appearance="primary" onClick={handleShortList}>
                Shortlist
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </ModalTransition>
    </Fragment>
  );
};

export default EmployeeDetailsModal;
