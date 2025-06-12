import { useNavigate } from "react-router-dom";
import Button from "@atlaskit/button/new";
import Heading from "@atlaskit/heading";
import { useEmployees } from "../../context/EmployeeContext";
import EmployeeList from "../../components/EmployeeList";
import { StyledHeading } from "./styles";

const Shortlisted = () => {
  const navigate = useNavigate();
  const { state } = useEmployees();
  const { shortlistedEmployees } = state;
  return (
    <div>
      <StyledHeading>
        <Heading size="large">Shortlisted Employees</Heading>
      </StyledHeading>
      <EmployeeList userDetails={shortlistedEmployees} />
      <Button onClick={() => navigate("/")}>Back</Button>
    </div>
  );
};

export default Shortlisted;
