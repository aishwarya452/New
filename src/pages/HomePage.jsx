import  { Link } from 'react-router-dom';

import '../App.css';
import Footer from '../components/Footer/Footer';
const HomePage = () => {
    return (
          
           
            <div className="other" id="other">
                <article className="content">
                    <div className="banner">
                        <section className="hero-section"><h1>Welcome to Vivekanand College!</h1>
                            <p>Your journey to excellence starts here.</p>
                             <button type="button" className='bt'><Link to="/admission">Apply Now!</Link> 
                          
                            </button> 
                            <a herf="/AdmissionPage"></a>
                            
                            
                        </section>
                    </div>
                     </article>
                <article className="info">
                    <p>**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
                    <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
                </article>
                <article className="text">
                    <h2>Why Choose Vivekanand College?</h2>
                    <ul>
                        <li>Legacy of Excellence: Decades of commitment to quality education.</li>
                        <li>Experienced Faculty: Learn from renowned experts and passionate educators.</li>
                        <li>Modern Facilities: Well-equipped labs, expansive library, and comfortable campus.</li>
                        <li>Holistic Development: Focus on co-curricular activities, sports, and community service.</li>
                        <li>Strong Placements: Excellent career opportunities with leading companies.</li>
                    </ul>
                    
                </article>
                <figure className="image">
                    <figcaption>Campus Life & Facilities</figcaption>
                    <section className="img">
                        <img src="/images/vck1.jpeg" />
                        <img src="/images/vck2.jpg" id="img2" />
                    </section>
                </figure>
                <section className="bottom">
                    <h4>Ready to explore our courses?</h4>
                    <button type="button" className='bt'><Link to="/courses">Explore Courses</Link> 
                          </button>
                </section>
                <br></br>
                <Footer/>
            </div>
        
    )
  }
 
export default HomePage;
