import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Store from "./pages/Store";
import Shelf from "./pages/Shelf";
import Camera from "./pages/Camera";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stores" element={<Store />} />
        <Route path="/shelves" element={<Shelf />} />
        <Route path="/cameras" element={<Camera />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;