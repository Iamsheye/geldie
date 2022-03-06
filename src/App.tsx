import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import TicketPage from "./pages/Ticketpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
