import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import DynamicTable from "@atlaskit/dynamic-table";
import SearchIcon from "@atlaskit/icon/glyph/search";
import { head, rows } from "../utils/sample-data";
import { StyledTextField } from "./styles";
import { searchUsers } from "../api/users";
import FilterModal from "../components/FilterModal";

const EmployeeList = ({ userDetails }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userDetails);
  }, [userDetails]);
  console.log(":::", userDetails);

  const debouncedFetch = useCallback(
    debounce((value, fetchApi) => {
      fetchApi(value).then((data) => {
        setUsers(data);
      });
    }, 500),
    []
  );

  const handleSearchChange = (e) => {
    const {
      target: { value },
    } = e;
    debouncedFetch(value, searchUsers);
  };
  console.log("::: users", users);

  return (
    <div>
      <StyledTextField
        placeholder="Search"
        elemBeforeInput={<SearchIcon size="medium" borderColor="transparent" />}
        onChange={(e) => handleSearchChange(e)}
      />
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
