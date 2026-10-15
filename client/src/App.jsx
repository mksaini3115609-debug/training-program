import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import DashboardScreen from "./screes/DashboardScreen";
import StudentScree from "./screes/StudentScree";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<DashboardScreen />} />
            <Route path="student" element={<StudentScree />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
