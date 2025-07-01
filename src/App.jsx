import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import Header from "./components/Header/Header";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";

import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import CoursesPage from "./Pages/CoursesPage";
import ContactPage from "./Pages/ContactPage";
import AdmissionPage from "./Pages/AdmissionPage";






const App =() => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  
  return(
    <div>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Aishwarya Sanjay Chavan"
          studentPhotoUrl="/images/aishwarya.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
           <Route path="/courses" element={<CoursesPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/admission" element={<AdmissionPage/>} />
          
          
        </Routes>
         <ChatbotComponent/>
      </Router>
      
      
      

    </div>
  )
}

export default App;