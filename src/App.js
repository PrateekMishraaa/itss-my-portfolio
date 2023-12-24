import logo from './logo.svg';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectCard } from './components/ProjectCard';
import { Contact } from './components/Contact';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
   <>
   <NavBar/>
   <Banner/>
   <Skills/>
   <Projects/>
   <ProjectCard/>
   <Contact/>
   <Newsletter/>
   <Footer/>
   </>
  );
}

export default App;
