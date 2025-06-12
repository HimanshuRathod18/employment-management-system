import styled from "styled-components";
import Button from "@atlaskit/button/new";
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

export { StyledTextField, HeaderContainer, LeftGroup, StyledTextInput };
