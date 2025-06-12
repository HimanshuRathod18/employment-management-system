import React, { useEffect, useState, useCallback } from "react";
import { useEmployees } from "../../context/EmployeeContext";
import { debounce } from "lodash";
import SearchIcon from "@atlaskit/icon/glyph/search";
import Button from "@atlaskit/button/new";
import Select from "@atlaskit/select";
import { fetchUsers, searchUsers } from "../../api/users";
import EmployeeList from "../../components/EmployeeList";
import { StyledTextField, ModalDebugger } from "./styles";
import FilterModal from "../../components/FilterModal";
import SortEmployees from "../../components/SortEmployees";
import { getSelectOptions, getFilteredUsers } from "../../utils/helper";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { state, dispatch } = useEmployees();
  const { allEmployees } = state;
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortedUsers, setSortedUsers] = useState(allEmployees);
  const [filters, setFilters] = useState({
    gender: null,
    bloodGroup: null,
    university: null,
  });
  // const admin = users.filter((user) => user.role === "admin");
  useEffect(() => {
    fetchUsers().then((data) => {
      dispatch({ type: "ALL_EMPLOYEES", payload: data });
    });
  }, []);
  useEffect(() => {
    setUsers(allEmployees.filter((user) => user.role !== "admin"));
  }, [allEmployees]);

  useEffect(() => {
    setSortedUsers(allEmployees);
    console.log("::: allemp");
  }, [allEmployees]);

  let filteredUsers = [];
  filteredUsers = getFilteredUsers(users, filters);
  useEffect(() => {
    setUsers(filteredUsers);
    console.log("::: filteredUsers", filteredUsers);
  }, [filters]);

  const debouncedFetch = useCallback(
    debounce((value, fetchApi) => {
      fetchApi(value).then((data) => {
        setUsers(data);
      });
    }, 500),
    []
  );

  const genderOptions = getSelectOptions(users, "gender");
  const bloodGroupOptions = getSelectOptions(users, "bloodGroup");
  const universityOptions = getSelectOptions(users, "university");

  const handleSearchChange = (e) => {
    const {
      target: { value },
    } = e;
    debouncedFetch(value, searchUsers);
  };
  const handleSortedUsers = (sortedUsers) => {
    setUsers(sortedUsers);
  };
  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
    console.log(":::Applied Filters:", newFilters);
  };
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <StyledTextField
          placeholder="Search"
          elemBeforeInput={
            <SearchIcon size="medium" borderColor="transparent" />
          }
          onChange={(e) => handleSearchChange(e)}
        />
        <FilterModal
          options={{ genderOptions, bloodGroupOptions, universityOptions }}
          filterChange={handleApplyFilters}
        />
        <SortEmployees users={allEmployees} onSortChange={handleSortedUsers} />
        <Button onClick={() => navigate("/shortlisted")}>
          Go to Shortlisted Employees
        </Button>
      </div>
      <EmployeeList userDetails={users} />
    </div>
  );
};

export default Home;
