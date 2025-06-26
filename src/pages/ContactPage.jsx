import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import '../App.css';
const ContactPage = () => {
    return(
        <div className="other" id="other">

            <br></br>
            <h1 className="abt">Contact Us</h1>
            <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
            <h2>General Enquries</h2>
            <p> [ Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
                    India  </p>
            <p> Phone:+91 12345 67890 <br></br>
                Email: info@vivekanandcollege.edu <br></br>
                Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST  </p>
            <h2>Admission Office</h2>
            <p>  For all admission-related queries regarding undergraduate or postgraduate programs: <br></br>
                Phone: +91 87654 32109 <br></br>
                Email:admissions@vivekanandcollege.edu </p>
           <h2>Student Support Services</h2>
             <p>  For current student support, academic advising, or general assistance: <br></br>
                Phone: +91 87654 32109 <br></br>
                Email: studentsupport@vivekanandcollege.edu </p>
           <h2>Find Us on the Map</h2>
             <a  className="abt" href="https://www.google.com/maps/search/Vivekanand+College/@16.6326869,73.9577377,11z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D">View on Google Maps</a>
             <h2>Send Us a Message</h2>
           <br></br>
           <Footer/>
        </div>
    )
}

export default ContactPage;