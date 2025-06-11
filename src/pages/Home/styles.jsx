import styled from "styled-components";
import TextField from "@atlaskit/textfield";

const StyledTextField = styled(TextField)`
  width: 20%;
  min-width: 150px;
`;

const ModalDebugger = styled.div`
  z-index: 9999 !important;
`;

export { StyledTextField, ModalDebugger };
