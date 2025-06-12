import styled from "styled-components";
import Textfield from "@atlaskit/textfield";

const StyledTextField = styled(Textfield)`
  height: 32px;

  & > input {
    height: 32px;
    width: 180px;
    padding: 0 8px;
    font-size: 14px;
    line-height: 1;
  }
`;
const StyledTextInput = styled.div`
  width: 180px;
  min-width: 150px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
`;

const LeftGroup = styled.div`
  display: flex;
  gap: 12px;
  flex: 1;
`;

const StyledError = styled.div`
  padding: 10px 0;
`;

const HeadingContainer = styled.header`
  background-color: #091e42;
  padding: 24px 32px;
  margin-bottom: 18px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-bottom: 4px solid #0c66e4;
`;

const SubTitle = styled.div`
  font-size: 14px;
  color: #b3bac5;
`;

export {
  StyledTextField,
  HeaderContainer,
  LeftGroup,
  StyledTextInput,
  StyledError,
  HeadingContainer,
  SubTitle,
};
