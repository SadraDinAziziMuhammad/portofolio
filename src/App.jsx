import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Achievements from './pages/Achievements';

function App() {
  return (
    <div className='flex min-h-screen font-poppins'>
      <Router>
      <Sidebar />
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
<Route path="/achievements" element={<Achievements />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
    </Router>
      <Footer />
    </div>
  );
}
export default App;