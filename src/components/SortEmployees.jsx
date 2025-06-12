import React, { useState, useEffect, useMemo } from "react";
import Select from "@atlaskit/select";
import { SORT_OPTIONS } from "../utils/constant";
import { StyledSelectWrapper } from "./styles";

const selectStyles = {
  control: (base) => ({
    ...base,
    minHeight: "32px",
    height: "32px",
  }),
  valueContainer: (base) => ({
    ...base,
    height: "32px",
    padding: "0 8px",
  }),
  indicatorsContainer: (base) => ({
    ...base,
    height: "32px",
  }),
  input: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
  }),
};

const SortableUserList = ({ users, onSortChange }) => {
  const [sortKey, setSortKey] = useState(null);

  const sortedUsers = useMemo(() => {
    if (!sortKey?.value) return users;

    const sorted = [...users].sort((a, b) => {
      const aVal = a[sortKey.value];
      const bVal = b[sortKey.value];

      if (typeof aVal === "string") return aVal.localeCompare(bVal);
      return aVal - bVal;
    });

    return sorted;
  }, [users, sortKey]);

  useEffect(() => {
    onSortChange(sortedUsers);
  }, [sortedUsers, onSortChange]);

  const handleChange = (option) => {
    setSortKey(option);
  };

  return (
    <StyledSelectWrapper>
      <Select
        options={SORT_OPTIONS}
        value={sortKey}
        onChange={handleChange}
        placeholder="Sort by"
        isClearable={true}
        styles={selectStyles}
      />
    </StyledSelectWrapper>
  );
};

export default SortableUserList;
