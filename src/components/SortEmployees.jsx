import React, { useState, useEffect, useMemo } from "react";
import Select from "@atlaskit/select";

const SortableUserList = ({ users, onSortChange }) => {
  const [sortKey, setSortKey] = useState(null);

  const options = [
    { label: "First Name", value: "firstName" },
    { label: "Last Name", value: "lastName" },
    { label: "Age", value: "age" },
  ];

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
        options={options}
        value={sortKey}
        onChange={handleChange}
        placeholder="Sort by"
        isClearable={true}
      />
    </div>
  );
};

export default SortableUserList;
