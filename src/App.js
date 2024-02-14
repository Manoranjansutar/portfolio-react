
import './App.css';
import Banner from './components/banner/Banner';
import Contact from './components/contact/Contact';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Testimonial from './components/testimonial/Testimonial';
import "slick-carousel/slick/slick.css"; 

function App() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Testimonial />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
