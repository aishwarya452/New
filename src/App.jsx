import { Route, BrowserRouter as Router, Routes } from "react-router-dom";







import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import Header from "./components/Header/Header";
import AdmissionPage from "./Pages/AdmissionPage";
import CoursesPage from "./Pages/CoursesPage";
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
        <ChatbotComponent/>
      </Router>
      
      
      

    </div>
  )
}

export default App;