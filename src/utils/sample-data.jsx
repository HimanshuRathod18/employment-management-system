import Avatar from "@atlaskit/avatar";
// import StarStarredIcon from "@atlaskit/icon/core/star-starred";
import { token } from "@atlaskit/tokens";

import { userDetails } from "./mock";

//  function kebabCase(input) {
//      return input.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!
//          .map((x) => x.toLowerCase())
//          .join('-');
//  }

// function createKey(input) {
//   return input ? input.replace(/^(the|a|an)/, "").replace(/\s/g, "") : input;
// }

//  function iterateThroughLorem(index: number) {
//      return index > lorem.length ? index - lorem.length : index;
//  }

//  const nameWrapperStyles = css({
//      display: 'flex',
//      alignItems: 'center',
//  });

//  const NameWrapper: FC<{ children: ReactNode }> = ({ children }) => (
//      <span css={nameWrapperStyles}>{children}</span>
//  );

//  const avatarWrapperStyles = css({
//      marginInlineEnd: token('space.100'),
//  });

//  const AvatarWrapper: FC<{ children: ReactNode }> = ({ children }) => (
//      // eslint-disable-next-line @atlaskit/design-system/use-primitives
//      <div css={avatarWrapperStyles}>{children}</div>
//  );

const getCommonCells = (withWidth) => [
  {
    key: "firstName",
    content: "First Name",
    isSortable: true,
    width: withWidth ? 10 : undefined,
  },
  {
    key: "lastName",
    content: "Last Name",
    isSortable: true,
    width: withWidth ? 10 : undefined,
  },
  {
    key: "company",
    content: "Company",
    shouldTruncate: true,
    width: withWidth ? 15 : undefined,
  },
  {
    key: "blood-group",
    content: "Blood Group",
    shouldTruncate: true,
    width: withWidth ? 5 : undefined,
  },
  {
    key: "email",
    content: "Email",
    shouldTruncate: true,
    width: withWidth ? 15 : undefined,
  },
  {
    key: "number",
    content: "Phone Number",
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
];

export const rows = (userDetails) =>
  userDetails.map((president, index) => ({
    key: `${president.firstName}-${president.lastName}`,
    isHighlighted: false,
    cells: createBaseCells(president, index),
  }));

// export const visuallyRefreshedRows = userDetails.map((president, index) => ({
//   key: kebabCase(president.name),
//   isHighlighted: false,
//   cells: [
//     ...createBaseCells(president, index),
//     {
//       key: "Star",
//       content: (
//         <StarWrapper>
//           <StarUnstarredIcon label="Unstarred" />
//         </StarWrapper>
//       ),
//     },
//   ],
// }));
