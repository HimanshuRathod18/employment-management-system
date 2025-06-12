import { useNavigate } from "react-router-dom";
import Button from "@atlaskit/button/new";
import { useEmployees } from "../../context/EmployeeContext";
import EmployeeList from "../../components/EmployeeList";

const Shortlisted = () => {
  const navigate = useNavigate();
  const { state } = useEmployees();
  const { shortlistedEmployees } = state;
  return (
    <div>
      <EmployeeList userDetails={shortlistedEmployees} />
      <Button onClick={() => navigate("/")}>Back</Button>
    </div>
  );
};

export default Shortlisted;
