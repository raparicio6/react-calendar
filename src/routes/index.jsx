import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Calendar from "../pages/Calendar";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
