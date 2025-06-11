import React, { useState, useEffect, useCallback } from "react";
import DynamicTable from "@atlaskit/dynamic-table";
import { head, rows } from "../utils/sample-data";

const EmployeeList = ({ userDetails }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userDetails);
  }, [userDetails]);
  // console.log(":::", userDetails);

  // console.log("::: users", users);

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
