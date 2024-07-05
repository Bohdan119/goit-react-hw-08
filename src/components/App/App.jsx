import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import RegistrationPage from '../../pages/RegistrationPage'
import AppBar from "../AppBar/AppBar";
import LoginPage from "../../pages/LoginPage";
import ContactsPage from "../../pages/ContactsPage";
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {refreshUser} from '../../redux/auth/operations'

function App() {

  const dispatch = useDispatch(refreshUser);
  useEffect(() => {
    dispatch(refreshUser());
  },[dispatch])

  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
            
            <Route element={<RestrictedRoute />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegistrationPage />} />
            </Route>
          
            <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>

          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
