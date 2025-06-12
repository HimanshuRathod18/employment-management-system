import React, { useState, useEffect } from "react";
import DynamicTable from "@atlaskit/dynamic-table";
import { head, rows } from "../utils/tableHelper";
import EmptyState from "@atlaskit/empty-state";
import Spinner from "@atlaskit/spinner";
import { TableContainer, TableScrollWrapper } from "./styles";

const EmployeeList = ({ userDetails }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUsers(userDetails);
    setLoading(false);
  }, [userDetails]);

  return (
    <TableContainer className="table-container">
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <Spinner size="medium" />
        </div>
      ) : users.length === 0 ? (
        <EmptyState
          header="No Employees Found"
          description="Try adjusting your filters or search criteria."
        />
      ) : (
        <TableScrollWrapper>
          <DynamicTable
            head={head}
            rows={rows(users)}
            rowsPerPage={15}
            defaultPage={1}
            loadingSpinnerSize="medium"
            testId="employee-table"
            isLoading={false}
            isFixedSize
            highlightedRowIndex={-1}
          />
        </TableScrollWrapper>
      )}
    </TableContainer>
  );
};

export default EmployeeList;
