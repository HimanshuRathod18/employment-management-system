import { useNavigate } from "react-router-dom";
import Button from "@atlaskit/button/new";
import Heading from "@atlaskit/heading";
import { useEmployees } from "../../context/EmployeeContext";
import EmployeeList from "../../components/EmployeeList";
import { HeadingContainer, SubTitle } from "../Home/styles";

const Shortlisted = () => {
  const navigate = useNavigate();
  const { state } = useEmployees();
  const { shortlistedEmployees } = state;
  return (
    <div>
      <HeadingContainer>
        <Heading size="xlarge" color="inverse">
          Shortlisted Employees
        </Heading>
        <SubTitle>
          {`Here is the list of shortlisted candidates, a total of ${shortlistedEmployees.length} candidates have been selected`}
        </SubTitle>
      </HeadingContainer>
      <EmployeeList userDetails={shortlistedEmployees} />
      <Button onClick={() => navigate("/")}>Back</Button>
    </div>
  );
};

export default Shortlisted;
