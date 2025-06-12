import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  allEmployees: [],
  shortlistedEmployees: [],
};

function employeeReducer(state, action) {
  switch (action.type) {
    case "ALL_EMPLOYEES":
      return {
        ...state,
        allEmployees: action.payload,
      };

    case "ADD_TO_SHORTLISTED_EMPLOYEES":
      const exists = state.shortlistedEmployees.some(
        (emp) => emp.id === action.payload.id
      );
      if (exists) return state;

      return {
        ...state,
        shortlistedEmployees: [...state.shortlistedEmployees, action.payload],
      };

    case "REMOVE_FROM_SHORTLIST":
      return {
        ...state,
        shortlistedEmployees: state.shortlistedEmployees.filter(
          (emp) => emp.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(employeeReducer, initialState);

  return (
    <EmployeeContext.Provider value={{ state, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = () => useContext(EmployeeContext);
