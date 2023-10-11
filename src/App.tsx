import Login from "./components/login";
import Dashboard from "./pages/dashboard/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import "./styles/style.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
