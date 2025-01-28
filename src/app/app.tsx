import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "context/authContext";
import Login from "pages/signin";
import Home from "pages/home";
import Feedback from "pages/feedback";
import Register from "pages/register";
import PrivateRoute from "./private-router";
import Forbidden from "pages/forbidden";
import AdminFeedbacks from "pages/admin/dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forbidden" element={<Forbidden />} />
          <Route element={<PrivateRoute requireAdmin={false} />}>
            <Route path="/feedback" element={<Feedback />} />
          </Route>
          <Route element={<PrivateRoute requireAdmin={true} />}>
            <Route path="/admin/dashboard" element={<AdminFeedbacks />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
