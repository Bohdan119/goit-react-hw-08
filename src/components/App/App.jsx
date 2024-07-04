import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import RegistrationPage from '../../pages/RegistrationPage'
import AppBar from "../AppBar/AppBar";
import LoginPage from "../../pages/LoginPage";
import ContactsPage from "../../pages/ContactsPage";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentOperation } from "../../redux/auth/operations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentOperation());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
