import React from "react";
import {
  Value,
  Label,
  FieldGrid,
  FieldItem,
  SectionWrapper,
  SectionTitle,
} from "./tabStyles";
const RenderEmployeeSections = ({ data }) => {
  return (
    <>
      {Object.entries(data).map(([sectionKey, sectionObj]) => (
        <SectionWrapper key={sectionKey}>
          <SectionTitle>{sectionObj.label}</SectionTitle>
          <FieldGrid>
            {Object.entries(sectionObj.value).map(([field, val]) => (
              <FieldItem key={field}>
                <Label>
                  {field
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </Label>
                <Value>{val || "—"}</Value>
              </FieldItem>
            ))}
          </FieldGrid>
        </SectionWrapper>
      ))}
    </>
  );
};

export default RenderEmployeeSections;
