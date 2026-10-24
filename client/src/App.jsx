import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./layout/AppLayout";
import DashboardScreen from "./screes/DashboardScreen";
import StudentScreen from "./screes/StudentScreen";
import PageNotFound from "./screes/PageNotFound";
import RegisterScreen from "./screes/RegisterScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<DashboardScreen />} />
          <Route path="student" element={<StudentScreen />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;