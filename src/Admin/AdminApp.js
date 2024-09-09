import { Route, Routes, useLocation} from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import LoginPage from "./LoginPage";
import Header from "./Header";

function AdminApp() {
  const location = useLocation();
  const showHeader = !(location.pathname === "/login" || location.pathname === "/signup");

  return (

    <div className="App">
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </div>
  );
}

export default AdminApp;
