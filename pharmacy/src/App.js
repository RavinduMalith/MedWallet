import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/Navigation/NavBar";
import NewDrug from "./Pages/AddDrug/NewDrug";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import SignIN from "./Pages/SignIN/SignIN";
import UploadCSV from "./Pages/CSVFileUpload/UploadCSV";
import About from "./Pages/About/About";
import Contact from "./Pages/ContactUs/Contact";

function App() {
  const location = useLocation();
  const hideNavBarRoutes = ["/signin", "/register"];

  const shouldHideNavBar = hideNavBarRoutes.includes(location.pathname);
  const shouldHideFooter = location.pathname === "/uploadcsv";

  return (
    <div className="App">
      {!shouldHideNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIN />} />
        <Route path="/register" element={<Register />} />
        <Route path="/newdrug" element={<NewDrug />} />
        <Route path="/uploadcsv" element={<UploadCSV />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>

      {!shouldHideFooter && <Footer />}
    </div>
  );
}

export default App;
