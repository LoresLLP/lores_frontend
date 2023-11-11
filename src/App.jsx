import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ComingSoon } from "./routes/Routes.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="*" element={<ComingSoon />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
