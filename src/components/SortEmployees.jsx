import React, { useState, useEffect, useMemo } from "react";
import Select, { components } from "@atlaskit/select";
import SortDescendingIcon from "@atlaskit/icon/core/sort-descending";
import { SORT_OPTIONS } from "../utils/constant";
import { StyledSelectWrapper } from "./styles";

const customComponents = {
  Control: (props) => (
    <components.Control {...props}>
      <div style={{ paddingLeft: 8, display: "flex", alignItems: "center" }}>
        <SortDescendingIcon label="icon" size="small" />
      </div>
      {props.children}
    </components.Control>
  ),
};

const selectStyles = {
  control: (base) => ({
    ...base,
    minHeight: "32px",
    height: "32px",
    borderRadius: "4px",
  }),
  indicatorsContainer: (base) => ({
    ...base,
    height: "32px",
  }),
  valueContainer: (base) => ({
    ...base,
    height: "32px",
    padding: "2px 8px",
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
        components={customComponents}
      />
    </StyledSelectWrapper>
  );
};

export default SortableUserList;
