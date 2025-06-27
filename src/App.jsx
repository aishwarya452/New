import { Route, BrowserRouter as Router, Routes } from "react-router-dom";









import HomePage from "./Pages/HomePage";
import CoursesPage from "./Pages/CoursesPage";
import ContactPage from "./Pages/ContactPage";
import AdmissionPage from "./Pages/AdmissionPage";
import AboutPage from "./Pages/AboutPage";
 




const App =() =>
  {
  return(
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
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