import styled from "styled-components";

const SectionWrapper = styled.div`
  width: 100%;
  background: #f7faff;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 24px;
  box-sizing: border-box;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: #e9f2ff; /* slightly darker blue on hover */
    box-shadow: 0 2px 8px rgba(9, 30, 66, 0.1);
  }
`;

const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #172b4d;
  margin-bottom: 16px;
`;

const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px 24px;
  width: 100%;
`;

const FieldItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  color: #6b778c;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const Value = styled.span`
  color: #172b4d;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
`;

export { Value, Label, FieldGrid, FieldItem, SectionWrapper, SectionTitle };
