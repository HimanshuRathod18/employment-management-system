import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shortlisted from "./pages/Shortlisted/Shortlisted";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shortlisted" element={<Shortlisted />} />
      </Routes>
    </>
  );
}

export default App;
