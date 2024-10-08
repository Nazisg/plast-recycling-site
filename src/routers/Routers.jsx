import React from "react";
import { Route, Routes } from "react-router-dom";
import RoutesData from "../db/RoutesData";

export default function Routers() {
  return (
    <div>
      <Routes>
        {RoutesData.map((route, index) => (
          <Route key={index} path={route.path}
            element={route.element} />
        ))}
      </Routes>
    </div>
  );
}
