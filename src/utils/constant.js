const USER_ROLE = { ADMIN: "admin" };

const DISPATCH_TYPE = {
  ALL_EMPLOYEES: "ALL_EMPLOYEES",
  ADD_TO_SHORTLISTED_EMPLOYEES: "ADD_TO_SHORTLISTED_EMPLOYEES",
  REMOVE_FROM_SHORTLIST: "REMOVE_FROM_SHORTLIST",
};

const SORT_OPTIONS = [
  { label: "First Name", value: "firstName" },
  { label: "Last Name", value: "lastName" },
  { label: "Age", value: "age" },
];

export { USER_ROLE, DISPATCH_TYPE, SORT_OPTIONS };
