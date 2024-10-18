import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [user, setUser] = useState({ role: null });

  const handleLogin = (role) => {
    setUser({ role });
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/user/*"
            element={
              user.role === 'user' ? (
                <UserDashboard />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/admin/*"
            element={
              user.role === 'admin' ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;