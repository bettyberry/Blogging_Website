import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthForm from "./pages/userAuthForm.page";
import Editor from "./pages/editor.pages"; // Import your Editor component
import TestConnection from "./pages/testpage.tsx"; // Import your TestConnection component

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="signin" element={<UserAuthForm type="sign-in" />} />
        <Route path="signup" element={<UserAuthForm type="sign-up" />} />
        <Route path="/test" element={<TestConnection />} />
      </Route>
      <Route path="/editor" element={<Editor />} />{" "}
      {/* Separate route for Editor */}
    </Routes>
  );
};

export default App;
