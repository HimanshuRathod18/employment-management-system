import React, { Fragment, useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const isShortListed = location.pathname === "/shortlisted";

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

  const handleShortList = async () => {
    setLoading(true);
    setFlag(false);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (isShortListed) {
      dispatch({
        type: DISPATCH_TYPE.REMOVE_FROM_SHORTLIST,
        payload: employee,
      });
    } else
      dispatch({
        type: DISPATCH_TYPE.ADD_TO_SHORTLISTED_EMPLOYEES,
        payload: employee,
      });

    setLoading(false);
    setFlag(true);
    setTimeout(() => {
      closeModal();
    }, 1000);
  };

  const shortlistOrRemoveButton = loading ? (
    <Button appearance="primary" isDisabled>
      <Spinner size="small" />
    </Button>
  ) : flag && isShortListed ? (
    <Button appearance="success" onClick={() => closeModal}>
      Removed
    </Button>
  ) : flag ? (
    <Button appearance="success" onClick={() => closeModal}>
      Shortlisted
    </Button>
  ) : isShortListed ? (
    <Button appearance="danger" onClick={handleShortList}>
      Remove
    </Button>
  ) : (
    <Button appearance="primary" onClick={handleShortList}>
      Shortlist
    </Button>
  );

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
              {shortlistOrRemoveButton}
            </ModalFooter>
          </Modal>
        )}
      </ModalTransition>
    </Fragment>
  );
};

export default EmployeeDetailsModal;
