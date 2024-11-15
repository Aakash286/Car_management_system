import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CarListPage from './pages/CarListPage';
import CreateCarPage from './pages/CreateCarPage';
import CarDetailPage from './pages/CarDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/carlist" element={<CarListPage />} />
        <Route path="/createCar" element={<CreateCarPage />} />
        <Route path="/car/:id" element={<CarDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
