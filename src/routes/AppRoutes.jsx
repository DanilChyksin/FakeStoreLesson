import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
    </Routes>
  );
}
