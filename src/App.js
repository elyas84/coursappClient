import React from "react";
import Header from "./components/layouts/Header";
import WelcomePage from "./components/pages/WelcomePage";
import ProfilePage from './components/pages/ProfilePage'
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ContactPage from "./components/pages/ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/pages/ErrorPage";
import Footer from "./components/layouts/Footer";
import ProgramDetailsPage from "./components/pages/ProgramDetailsPage";
import SearchPage from "./components/pages/SearchPage";
export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/course/:id" element={<ProgramDetailsPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
