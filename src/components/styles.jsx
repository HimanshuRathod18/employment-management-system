import TextField from "@atlaskit/textfield";
import Image from "@atlaskit/image";
import styled from "styled-components";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTableHeader = styled.div`
fontSize: '16px', fontWeight: 600`;

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
const StyledRow = styled.div`
  text-wrap: auto;
  word-break: break-all;
  background-color: ${(props) => (props.even ? "#F0F4FF" : "#E2ECFD")};
  padding: 6px;
  width: 100%;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: #d2e3fc;
    box-shadow: 0 1px 4px rgba(9, 30, 66, 0.1);
  }
`;

const TableScrollWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  display: block;
  table {
    min-width: 1024px;
  }
  @media (max-width: 768px) {
    padding-bottom: 8px; /* creates space for horizontal scroll bar */
  }
`;

const TableContainer = styled.div`
  background-color: #f4f5f7;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 18px;
  font-weight: 600;
  background-color: #e9f2ff;
  color: #172b4d;
  padding: 10px;
  border-bottom: 1px solid #dfe1e6;
  border-radius: 4px 4px 0 0;

  strong {
    font-size: 16px;
    color: #172b4d;
  }
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
  StyledRow,
  TableContainer,
  HeaderWrapper,
  TableScrollWrapper,
};
