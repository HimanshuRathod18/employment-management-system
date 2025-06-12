import React, { useState, useEffect, useMemo } from "react";
import Select from "@atlaskit/select";
import { SORT_OPTIONS } from "../utils/constant";

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
    <div style={{ width: "180px", marginBottom: "1rem" }}>
      <Select
        options={SORT_OPTIONS}
        value={sortKey}
        onChange={handleChange}
        placeholder="Sort by"
        isClearable={true}
      />
    </div>
  );
};

export default SortableUserList;
