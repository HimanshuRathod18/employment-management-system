import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shortlisted from "./pages/Shortlisted/Shortlisted";
import { GlobalStyle } from "./theme";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shortlisted" element={<Shortlisted />} />
      </Routes>
    </>
  );
}

export default App;
