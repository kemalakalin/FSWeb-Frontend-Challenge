
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './pages/header.jsx'
import Skills from './pages/Skills.jsx';
import Profile from './pages/profile.jsx';
import Projects from './pages/Projects.jsx';
import Footer from './pages/Footer.jsx';
import { SiteProvider } from './context/SiteContext';
import { useSite } from './context/SiteContext';

function App() {
const { isDarkMode } = useSite();

  return (
    <>
    <SiteProvider>
    <Header/>
    <Skills/>
    <Profile/>
    <Projects/>
    <Footer/>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
      </SiteProvider>
    </>
  )
}

export default App
