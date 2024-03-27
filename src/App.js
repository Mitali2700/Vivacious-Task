import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/reset-password" exact element={<ForgotPassword/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;