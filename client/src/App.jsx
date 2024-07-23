import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

import Login from "./pages/Login";
import Register from "./pages/Register";

import NavBar from "./components/Navbar";
import Devis from "./pages/Devis";
import Footer from "./components/Footer";
import ContactForm from "./pages/Contact ";
import Traducteur from "./pages/Traducteur";
import ProfileCard from "./pages/Profil ";

function App() {
  return (
    <>
      <NavBar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/traducteur" element={<Traducteur />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfileCard />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
