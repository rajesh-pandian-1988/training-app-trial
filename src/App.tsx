import { Home } from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Users } from "./pages/Users/Users";
import Layout from "./pages/Layout/Layout";
import { Courses } from "./pages/Courses/Courses";
import { Assignments } from "./pages/Assignments/Assignments";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="user" element={<Users />} />
          <Route path="course" element={<Courses />} />
          <Route path="assignment" element={<Assignments />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
