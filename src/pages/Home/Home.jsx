import React, { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";
import SearchIcon from "@atlaskit/icon/glyph/search";

import { fetchUsers, searchUsers } from "../../api/users";
import EmployeeList from "../../components/EmployeeList";
import { StyledTextField, ModalDebugger } from "./styles";
import FilterModal from "../../components/FilterModal";
import { getSelectOptions, getFilteredUsers } from "../../utils/helper";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    gender: null,
    bloodGroup: null,
    university: null,
  });
  const admin = users.filter((user) => user.role === "admin");
  console.log("::: admin", admin);
  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);
  let filteredUsers = [];
  filteredUsers = getFilteredUsers(users, filters);
  console.log("::: filteredUsers", filteredUsers);
  useEffect(() => {
    setUsers(filteredUsers);
  }, [filters]);

  const debouncedFetch = useCallback(
    debounce((value, fetchApi) => {
      fetchApi(value).then((data) => {
        setUsers(data);
      });
    }, 500),
    []
  );
  // create a function to return genderOptions in helper
  const genderOptions = getSelectOptions(users, "gender");
  const bloodGroupOptions = getSelectOptions(users, "bloodGroup");
  const universityOptions = getSelectOptions(users, "university");

  const handleSearchChange = (e) => {
    const {
      target: { value },
    } = e;
    debouncedFetch(value, searchUsers);
  };

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
    console.log(":::Applied Filters:", newFilters);
  };

  return (
    <div>
      <StyledTextField
        placeholder="Search"
        elemBeforeInput={<SearchIcon size="medium" borderColor="transparent" />}
        onChange={(e) => handleSearchChange(e)}
      />
      <FilterModal
        options={{ genderOptions, bloodGroupOptions, universityOptions }}
        filterChange={handleApplyFilters}
      />
      <EmployeeList userDetails={users} />
    </div>
  );
};

export default Home;
