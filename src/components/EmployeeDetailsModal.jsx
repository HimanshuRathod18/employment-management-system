import React, { Fragment, useCallback, useState } from "react";
import Button from "@atlaskit/button/new";
import Avatar from "@atlaskit/avatar";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTransition,
} from "@atlaskit/modal-dialog";
import Spinner from "@atlaskit/spinner";
import EmployeeDetailsTab from "./EmployeeDetailsTab";
import { useEmployees } from "../context/EmployeeContext";
import { DISPATCH_TYPE } from "../utils/constant";
import { formatLabel } from "../utils/helper";
import { HeaderWrapper } from "./styles";

const EmployeeDetailsModal = ({ employee }) => {
  const { dispatch } = useEmployees();
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState("large");
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(null);

  const closeModal = useCallback(() => setIsOpen(false), [setIsOpen]);
  const setWidthAndOpen = useCallback(
    (newWidth) => {
      setWidth(newWidth);
      requestAnimationFrame(() => setIsOpen(true));
    },
    [setWidth, setIsOpen]
  );

  const handleShortList = () => {
    dispatch({
      type: DISPATCH_TYPE.ADD_TO_SHORTLISTED_EMPLOYEES,
      payload: employee,
    });
  };
  return (
    <Fragment>
      <Button appearance="primary" onClick={() => setWidthAndOpen("large")}>
        Details
      </Button>

      <ModalTransition>
        {isOpen && (
          <Modal onClose={closeModal} width={width}>
            <ModalHeader hasCloseButton>
              <HeaderWrapper>
                <Avatar
                  name={`${employee.firstName} ${employee.lastName}`}
                  src={employee.image}
                  size="large"
                  appearance="circle"
                />
                {`${employee.firstName} ${employee.lastName} - ${formatLabel(
                  employee.role
                )}`}
              </HeaderWrapper>
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
