import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/index";
import ProjectsPage from "./pages/projects";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
