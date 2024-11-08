import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import UserDashboard from './components/pages/UserDashboard';
import TurnoRequest from './components/pages/TurnoRequest';
import UserProfile from './components/pages/UserProfile';
import ServicesPage from './components/pages/Services';
import LegalAdvice from './components/pages/services/LegalAdvice';
import VictimProtection from './components/pages/services/VictimProtection';
import CivilRegistration from './components/pages/services/CivilRegistration';
import CaseMonitoring from './components/pages/services/CaseMonitoring';
import Conciliation from './components/pages/services/Conciliation';
import AuthenticationNotary from './components/pages/services/AuthenticationNotary';
import News from './components/pages/News';
import Contact from './components/pages/Contac';

function App() {

  return (
    <>
      <Router>
      <div className="flex flex-col main-h-screen">
        < Navbar />
       
        <main className="flex-grow mt-8">
          <Routes>
            <Route path='/' element={<Home /> }  /> 
            <Route path='/register' element ={< Register/>} />
            <Route path='/dashboard' element ={< UserDashboard />} />
            <Route path='/login' element ={<Login />} />  
            <Route path="/turno-request" element={< TurnoRequest/>} />
            <Route path="/profile" element={< UserProfile />} />
            <Route path="/services" element={< ServicesPage />} />
            <Route path="/services/legal-advice" element={<LegalAdvice />} />
            <Route path="/services/victim-protection" element={< VictimProtection />} />
            <Route path="/services/civil-registration" element={< CivilRegistration/>} />
            <Route path="/services/case-monitoring" element={< CaseMonitoring/>} />
            <Route path="/services/conciliation" element={< Conciliation/>} />
            <Route path="/services/authentication-notary" element={< AuthenticationNotary/>} />
            <Route path='/noticias' element ={<News />} />
            <Route path='/contacto' element ={<Contact/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
