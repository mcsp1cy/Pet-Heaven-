// import pages, components and routing modules
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Pets from "./pages/AvailablePets";
import Register from "./pages/Register";
import AdoptPetForm from "./pages/AdoptPetForm";
import ReleasePetForm from "./pages/ReleasePetForm";

// main App component with routing
function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pets" element={<Pets />} />
      <Route path="/register" element={<Register />} />
      <Route path="/adoptpetform" element={<AdoptPetForm />} />
      <Route path="/releasepetform" element={<ReleasePetForm />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;