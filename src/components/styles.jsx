import TextField from "@atlaskit/textfield";
import Image from "@atlaskit/image";
import styled from "styled-components";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  color: #172b4d;
  margin-bottom: 1.5rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ReadOnlyField = styled(TextField)`
  flex: 1;
  input {
    background-color: #f4f5f7;
    cursor: not-allowed;
  }
`;

const Value = styled.div`
  color: #172b4d;
  font-size: 0.95rem;
  word-break: break-word;
`;

const StyledFieldDiv = styled.div`
  display: flex;
`;

const StyledImage = styled(Image)`
  height: 40%;
  width: auto;
  max-width: auto;
`;

const StyledDiv = styled.div`
  display: block;
  height: 40%;
`;
const StyledSelectWrapper = styled.div`
  height: 32px;
  width: 180px;
  min-width: 150px;
`;
export {
  SectionWrapper,
  SectionTitle,
  ReadOnlyField,
  Row,
  Value,
  StyledFieldDiv,
  StyledImage,
  StyledDiv,
  StyledSelectWrapper,
};
