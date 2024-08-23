import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProfilesPage from "./pages/ProfilesPage";
import MapPage from "./pages/MapPage";
import AdminPanel from "./pages/AdminPanel";
import ProfileDetails from "./components/profile/ProfileDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-gradient-to-r from-base-300 to-gray-400">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/profiles" element={<ProfilesPage />} />
          <Route path="/map" element={<MapPage/>} />
          <Route path="/admin" element={<AdminPanel/>} />
          <Route path="/profiles/:id" element={<ProfileDetails/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
