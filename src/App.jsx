import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ArtDetails from "./pages/ArtDetails/ArtDetails.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import Home from "./pages/Home/Home.jsx";
import "./App.scss";

const App = () => (
  <BrowserRouter basename="/modsen-museum">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/art-details/:id" element={<ArtDetails />} />
      <Route path="/favorite" element={<Favorites />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
export default App;
