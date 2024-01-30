import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserAdmission from "./pages/UserAdmission";
import VerifyEmail from "./pages/VerifyEmail";
import EmailVerified from "./pages/EmailVerified";
import WelcomeBack from "./pages/WelcomeBack";
import SetUpAccount from "./pages/SetUpAccount";
import SetUpAccountSuccess from "./pages/SetUpAccountSuccess";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/UserAdmission" element={<UserAdmission />} />
          <Route path="/VerifyEmail" element={<VerifyEmail />} />
          <Route path="/EmailVerified" element={<EmailVerified />} />
          <Route path="/WelcomeBack" element={<WelcomeBack />} />
          <Route path="/SetUpAccount" element={<SetUpAccount />} />
          <Route
            path="/SetUpAccountSuccess"
            element={<SetUpAccountSuccess />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
