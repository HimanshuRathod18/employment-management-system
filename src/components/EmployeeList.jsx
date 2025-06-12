import React, { useState, useEffect } from "react";
import DynamicTable from "@atlaskit/dynamic-table";
import { head, rows } from "../utils/tableHelper";
import styled from "styled-components";
import EmptyState from "@atlaskit/empty-state";
import Spinner from "@atlaskit/spinner";

const TableContainer = styled.div`
  background-color: #f4f5f7;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
`;

const EmployeeList = ({ userDetails }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUsers(userDetails);
    setLoading(false);
  }, [userDetails]);

  return (
    <TableContainer>
      {loading ? (
        <div
          style={{ display: "flex", justifyContent: "center", padding: "20px" }}
        >
          <Spinner size="medium" />
        </div>
      ) : users.length === 0 ? (
        <EmptyState
          header="No Employees Found"
          description="Try adjusting your filters or search criteria."
        />
      ) : (
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
      )}
    </TableContainer>
  );
};

export default EmployeeList;
