import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdopterProfile from "./pages/AdopterProfile";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/auth/Adopter/SignUpPage";
import LoginPage from "./pages/auth/Adopter/LoginPage";
import  Test from "./pages/Test";
import EditPage from "./pages/EditPage";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<AdopterProfile />} />
          <Route path="/adopt/signup" element={<SignUpPage />} />
          <Route path="/adopt/login" element={<LoginPage />} />
          <Route path="/test" element={<Test /> } />
          <Route path="/edit" element={<EditPage /> } />
          <Route path="/home" element={<Home /> } />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
