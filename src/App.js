/* eslint-disable no-unused-vars */
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ComingSoon from "./components/ComingSoon";
import LandingPage from "./components/Pages/LandingPage";
import SignIn from "./components/Pages/SignIn";
import SignUp from "./components/Pages/SignUp";
import TeamPage from "./components/Pages/TeamPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* <Route path="/team" element={<TeamPage />} /> */}


        <Route
          path="/roadmaps"
          element={<Navigate replace to="/comingsoon" />}
        />
        <Route path="/team" element={<Navigate replace to="/comingsoon" />} />
        <Route path="/events" element={<Navigate replace to="/comingsoon" />} />
        <Route
          path="/community"
          element={<Navigate replace to="/comingsoon" />}
        />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
