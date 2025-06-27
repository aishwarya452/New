import { Route, BrowserRouter as Router, Routes } from "react-router-dom";









import HomePage from "./Pages/HomePage";
import CoursesPage from "./Pages/CoursesPage";
import AdmissionPage from "./Pages/AdmissionPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import Headers from "./components/Header/Header";
 




const App =() =>
  {
  return(
    <div>
      <Router>
        <Headers/>
        <Routes>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
           <Route path="/courses" element={<CoursesPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/admission" element={<AdmissionPage/>} />
          
          
        </Routes>

      </Router>
      
      
      

    </div>
  )
}

export default App;