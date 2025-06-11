import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../api/users";
import EmployeeList from "../../components/EmployeeList";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <EmployeeList userDetails={users} />
    </div>
  );
};

export default Home;
