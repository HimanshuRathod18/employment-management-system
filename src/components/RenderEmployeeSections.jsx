import { Label } from "@atlaskit/form";
import {
  SectionTitle,
  Value,
  ReadOnlyField,
  Row,
  SectionWrapper,
  StyledFieldDiv,
} from "./styles";
import { formatLabel } from "../utils/helper";

const RenderEmployeeSections = ({ data }) => {
  return (
    <div>
      {Object.entries(data).map(([key, section]) => (
        <SectionWrapper>
          <SectionTitle>{section.label}</SectionTitle>
          <StyledFieldDiv>
            {Object.entries(section.value).map(([fieldName, value]) => (
              <Row key={fieldName}>
                <Label>{formatLabel(fieldName)}</Label>
                <Value>{value || "-"}</Value>
              </Row>
            ))}
          </StyledFieldDiv>
        </SectionWrapper>
      ))}
    </div>
  );
};

export default RenderEmployeeSections;
