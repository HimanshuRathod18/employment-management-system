import React, { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@atlaskit/icon/glyph/search";
import Button from "@atlaskit/button/new";
import ChevronRightIcon from "@atlaskit/icon/core/chevron-right";
import { useEmployees } from "../../context/EmployeeContext";
import { fetchUsers, searchUsers } from "../../api/users";
import EmployeeList from "../../components/EmployeeList";
import {
  HeaderContainer,
  StyledTextField,
  LeftGroup,
  StyledTextInput,
} from "./styles";
import FilterModal from "../../components/FilterModal";
import SortEmployees from "../../components/SortEmployees";
import { getSelectOptions, getFilteredUsers } from "../../utils/helper";
import { DISPATCH_TYPE, USER_ROLE } from "../../utils/constant";

const Home = () => {
  const { state, dispatch } = useEmployees();
  const { allEmployees } = state;

  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({
    gender: null,
    bloodGroup: null,
    university: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers().then((data) => {
      dispatch({ type: DISPATCH_TYPE.ALL_EMPLOYEES, payload: data });
    });
  }, []);

  useEffect(() => {
    const filtered = getFilteredUsers(
      allEmployees.filter((user) => user.role !== USER_ROLE.ADMIN),
      filters
    );
    setUsers(filtered);
  }, [filters, allEmployees]);

  const debouncedFetch = useCallback(
    debounce((value) => {
      searchUsers(value).then((data) => {
        const filtered = getFilteredUsers(
          data.filter((user) => user.role !== USER_ROLE.ADMIN),
          filters
        );
        setUsers(filtered);
      });
    }, 500),
    [filters]
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (value.trim()) {
      debouncedFetch(value);
    } else {
      const filtered = getFilteredUsers(
        allEmployees.filter((user) => user.role !== USER_ROLE.ADMIN),
        filters
      );
      setUsers(filtered);
    }
  };

  const handleSortedUsers = (sortedUsers) => {
    setUsers(sortedUsers);
  };

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const genderOptions = getSelectOptions(allEmployees, "gender");
  const bloodGroupOptions = getSelectOptions(allEmployees, "bloodGroup");
  const universityOptions = getSelectOptions(allEmployees, "university");

  return (
    <div>
      <HeaderContainer>
        <LeftGroup>
          <StyledTextInput>
            <StyledTextField
              placeholder="Search"
              elemBeforeInput={
                <SearchIcon size="medium" borderColor="transparent" />
              }
              onChange={handleSearchChange}
            />
          </StyledTextInput>

          <FilterModal
            options={{ genderOptions, bloodGroupOptions, universityOptions }}
            filterChange={handleApplyFilters}
          />
          <SortEmployees users={users} onSortChange={handleSortedUsers} />
        </LeftGroup>
        <div>
          <Button
            onClick={() => navigate("/shortlisted")}
            style={{ height: "40px" }}
            iconAfter={ChevronRightIcon}
          >
            Shortlisted Employees
          </Button>
        </div>
      </HeaderContainer>

      <EmployeeList userDetails={users} />
    </div>
  );
};

export default Home;
