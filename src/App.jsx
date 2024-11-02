import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Analitics } from "./pages/Analitics";
import { useState } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Navigation } from "./components/Navigation";

export const App = () =>{
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      permissions: ["analize"],
      roles: [],
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Navigation />

      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}

      <Routes>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route
          path="/analitics"
          element={
            <ProtectedRoute
              isAllowed={!!user && user.permissions.includes("analize")}
              redirectTo="/home"
            >
              <Analitics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              isAllowed={!!user && user.roles.includes("admin")}
              redirectTo="/home"
            ></ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
