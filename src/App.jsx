import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Dashboard from './components/Pages/Dashboard';
import ToDoList from './components/Pages/ToDoList';
import DailyRoutine from './components/Pages/DailyRoutine';
import Logout from './components/Pages/Logout';
import SignUp from './components/Pages/SignUp';
import Celebrations from './components/Pages/Celebrations';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

        {/* Layout with Nested Routes */}
        <Route path="Layout/:username" element={<Layout />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="todolist" element={<ToDoList />} />
          <Route path="DailyRoutine" element={<DailyRoutine />} />
          <Route path="Celebrations" element={<Celebrations />} />
          <Route path="Logout" element={<Logout />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
