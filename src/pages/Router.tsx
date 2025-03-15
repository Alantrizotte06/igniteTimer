import React from "react"; //Linha adicionada para evitar erros de importação.
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { History } from "./History";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}
