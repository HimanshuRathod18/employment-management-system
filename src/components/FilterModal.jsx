import React, { useState } from "react";
import Button from "@atlaskit/button/new";
import { Label } from "@atlaskit/form";
import Select from "@atlaskit/select";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";

const FilterModal = ({ options, filterChange }) => {
  const { genderOptions, bloodGroupOptions, universityOptions } = options;

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [isOpen, setIsOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState({
    gender: null,
    bloodGroup: null,
    university: null,
  });
  console.log("::: localFilter", localFilters);
  const handleChange = (field, selectedOption) => {
    setLocalFilters((prev) => ({
      ...prev,
      [field]: selectedOption,
    }));
  };

  const handleApply = () => {
    filterChange(localFilters);
    closeModal();
  };

  const handleReset = () => {
    const cleared = {
      gender: null,
      bloodGroup: null,
      university: null,
    };
    setLocalFilters(cleared);
    filterChange(cleared);
    closeModal();
  };

  return (
    <>
      <Button appearance="primary" onClick={openModal}>
        Open Modal
      </Button>

      <ModalTransition>
        {isOpen && (
          <Modal shouldScrollInViewport onClose={closeModal}>
            <ModalHeader hasCloseButton={true}>
              <ModalTitle>Choose from these filters</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <Label>Gender</Label>
              <Select
                options={genderOptions}
                placeholder="Choose a gender"
                value={localFilters.gender}
                onChange={(option) => handleChange("gender", option)}
              />
              <Label>Blood Group</Label>
              <Select
                options={bloodGroupOptions}
                placeholder="Choose a blood group"
                value={localFilters.bloodGroup}
                onChange={(option) => handleChange("bloodGroup", option)}
              />
              <Label>University</Label>
              <Select
                options={universityOptions}
                placeholder="Choose an university"
                value={localFilters.university}
                onChange={(option) => handleChange("university", option)}
              />
            </ModalBody>
            <ModalFooter>
              <Button appearance="subtle" onClick={handleReset}>
                Reset
              </Button>
              <Button appearance="primary" onClick={handleApply}>
                Apply filters
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </ModalTransition>
    </>
  );
};

export default FilterModal;
