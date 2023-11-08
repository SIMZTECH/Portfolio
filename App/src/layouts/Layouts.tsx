import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Hero from '../components/ui/Hero';
import Services from '../components/ui/Services';
import WorkExperience from '../components/ui/WorkExperience';
import Projects from '../components/ui/Projects';
import ContactUs from '../components/ui/ContactUs';

function Layouts() {

  return (
    <>
    <Header />
    <main>
        <Hero />
        <Services />
        <WorkExperience />
        <Projects />
        <ContactUs />
    </main>
    <Footer />
    </>
  )
}

export default Layouts;