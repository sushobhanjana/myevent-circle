import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./helpers/ProtectedRouter";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Qrscanner from "./components/pages/Qrscanner";
import Logout from "./components/pages/Logout";
import { getSessionStorage } from "./helpers/sessionStorage";
import PublicRoute from "./helpers/PublicRouter";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    getSessionStorage("user")
  );

  return (
    <Router>
      <Routes>
        {/* protected routes */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/scanner" element={<Qrscanner />} />
          <Route
            path="/logout"
            element={<Logout setIsAuthenticated={setIsAuthenticated} />}
          />
        </Route>
        {/* public routes */}
        <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
