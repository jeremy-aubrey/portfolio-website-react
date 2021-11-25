import { Route, Routes, Navigate } from "react-router-dom";

import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ToolsPage from "./pages/Tools";

import "./App.css";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<AboutPage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/tools" element={<ToolsPage />}></Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </main>
  );
};

export default App;
