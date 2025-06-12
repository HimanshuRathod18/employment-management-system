import EmployeeDetailsModal from "../components/EmployeeDetailsModal";

const getCommonCells = (withWidth) => [
  {
    key: "firstName",
    content: "First Name",
    width: withWidth ? 8 : undefined,
  },
  {
    key: "lastName",
    content: "Last Name",
    width: withWidth ? 8 : undefined,
  },
  {
    key: "company",
    content: "Company",
    shouldTruncate: true,
    width: withWidth ? 25 : undefined,
  },
  {
    key: "blood-group",
    content: "Blood Group",
    shouldTruncate: true,
    width: withWidth ? 10 : undefined,
  },
  {
    key: "email",
    content: "Email",
    shouldTruncate: true,
    width: withWidth ? 10 : undefined,
  },
  {
    key: "number",
    content: "Phone Number",
    shouldTruncate: true,
    width: withWidth ? 15 : undefined,
  },
  {
    key: "details",
    content: "Details",
    shouldTruncate: true,
    width: withWidth ? 10 : undefined,
  },
];

export const createHead = (withWidth) => {
  return {
    cells: getCommonCells(withWidth),
  };
};

export const head = createHead(true);

const createBaseCells = (president, index) => [
  {
    key: president.firstName,
    content: president.firstName,
  },
  {
    key: president.lastName,
    content: president.lastName,
  },
  {
    key: president.company.name,
    content: president.company.name,
  },
  {
    key: president.bloodGroup,
    content: president.bloodGroup,
  },
  {
    key: president.email,
    content: president.email,
  },
  {
    key: president.phone,
    content: president.phone,
  },
  {
    key: `${president.id}-details`,
    content: <EmployeeDetailsModal employee={president} />,
  },
];

export const rows = (userDetails) =>
  userDetails.map((president, index) => ({
    key: `${president.firstName}-${president.lastName}`,
    isHighlighted: false,
    cells: createBaseCells(president, index),
  }));
