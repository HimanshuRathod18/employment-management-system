import Heading from "@atlaskit/heading";
import EmployeeDetailsModal from "../components/EmployeeDetailsModal";
import { StyledRow } from "../components/styles";

const getCommonCells = (withWidth) => [
  {
    key: "firstName",
    content: <Heading size="medium">First Name</Heading>,
    width: withWidth ? 8 : undefined,
  },
  {
    key: "lastName",
    content: <Heading size="medium">Last Name</Heading>,
    width: withWidth ? 10 : undefined,
  },
  {
    key: "company",
    content: <Heading size="medium">Company</Heading>,
    shouldTruncate: true,
    width: withWidth ? 20 : undefined,
  },
  {
    key: "blood-group",
    content: <Heading size="medium">Blood Group</Heading>,
    shouldTruncate: true,
    width: withWidth ? 10 : undefined,
  },
  {
    key: "email",
    content: <Heading size="medium">Email</Heading>,
    shouldTruncate: true,
    width: withWidth ? 20 : undefined,
  },
  {
    key: "number",
    content: <Heading size="medium">Phone Number</Heading>,
    shouldTruncate: true,
    width: withWidth ? 15 : undefined,
  },
  {
    key: "details",
    content: <Heading size="medium">Details</Heading>,
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
    content: (
      <StyledRow even={index % 2 === 0}>{president.firstName}</StyledRow>
    ),
  },
  {
    key: president.lastName,
    content: <StyledRow even={index % 2 === 0}>{president.lastName}</StyledRow>,
  },
  {
    key: president.company.name,
    content: (
      <StyledRow even={index % 2 === 0}>{president.company.name}</StyledRow>
    ),
  },
  {
    key: president.bloodGroup,
    content: (
      <StyledRow even={index % 2 === 0}>{president.bloodGroup}</StyledRow>
    ),
  },
  {
    key: president.email,
    content: <StyledRow even={index % 2 === 0}>{president.email}</StyledRow>,
  },
  {
    key: president.phone,
    content: <StyledRow even={index % 2 === 0}>{president.phone}</StyledRow>,
  },
  {
    key: `${president.id}-details`,
    content: (
      <StyledRow even={index % 2 === 0}>
        <EmployeeDetailsModal employee={president} />
      </StyledRow>
    ),
  },
];

export const rows = (userDetails) =>
  userDetails.map((president, index) => ({
    key: `${president.firstName}-${president.lastName}`,
    isHighlighted: false,
    cells: createBaseCells(president, index),
  }));
