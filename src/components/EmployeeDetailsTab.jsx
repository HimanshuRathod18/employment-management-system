import { useCallback, useState } from "react";
// import styled from "styled-components";
import { Box } from "@atlaskit/primitives/compiled";
import Tabs, { Tab, TabList, TabPanel } from "@atlaskit/tabs";
// import { token } from "@atlaskit/tokens";
import { getTabData } from "../utils/helper";
import RenderEmployeeSections from "./RenderEmployeeSections";

// const StyledContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   flex-grow: 1;
//   background-color: ${token("color.background.neutral")};
//   border-radius: 3px;
//   color: ${token("color.text.subtlest")};
//   font: ${token("font.heading.xxlarge")};
//   margin-block-end: ${token("space.100")};
//   margin-block-start: ${token("space.200")};
//   padding-block-end: ${token("space.400")};
//   padding-block-start: ${token("space.400")};
//   padding-inline-end: ${token("space.400")};
//   padding-inline-start: ${token("space.400")};
// `;

// export const Panel = ({ children, testId }) => (
//   <StyledContainer>{children}</StyledContainer>
// );

export default function EmployeeDetailsTab({ employeeDetails }) {
  const [selected, setSelected] = useState(0);

  const handleUpdate = useCallback(
    (index) => setSelected(index),
    [setSelected]
  );

  const tabs = getTabData(employeeDetails);

  return (
    <Box>
      <Tabs onChange={handleUpdate} selected={selected} id="controlled">
        <TabList>
          {tabs.map((tab) => (
            <Tab key={tab.label}>{tab.label}</Tab>
          ))}
        </TabList>
        {tabs.map((tab) => (
          <TabPanel>
            <RenderEmployeeSections data={tab.data} />
          </TabPanel>
        ))}
      </Tabs>
    </Box>
  );
}
