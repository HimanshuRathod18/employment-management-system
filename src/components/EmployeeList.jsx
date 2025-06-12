import React, { useState, useEffect } from "react";
import DynamicTable from "@atlaskit/dynamic-table";
import { head, rows } from "../utils/tableHelper";

const EmployeeList = ({ userDetails }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userDetails);
  }, [userDetails]);

  return (
    <div>
      <DynamicTable
        head={head}
        rows={rows(users)}
        rowsPerPage={15}
        defaultPage={1}
        loadingSpinnerSize="medium"
        testId="table"
      />
    </div>
  );
};

export default EmployeeList;
