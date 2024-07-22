import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WhatsAppScreen1 from './pages/whatsapp/WhatsAppScreen1';
import WhatsAppScreen2 from './pages/whatsapp/WhatsAppScreen2';
import WhatsAppScreen3 from './pages/whatsapp/WhatsAppScreen3';
import WhatsAppScreen4 from './pages/whatsapp/WhatsAppScreen4';
import WhatsAppScreen5 from './pages/whatsapp/WhatsAppScreen5';
import WhatsAppScreen6 from './pages/whatsapp/WhatsAppScreen6';
import WhatsAppScreen7 from './pages/whatsapp/WhatsAppScreen7';
import WhatsAppScreen8 from './pages/whatsapp/WhatsAppScreen8';
import WhatsAppScreen9 from './pages/whatsapp/WhatsAppScreen9';
import InstagramScreen1 from './pages/instagram/InstagramScreen1';
import InstagramScreen2 from './pages/instagram/InstagramScreen2';
import InstagramScreen3 from './pages/instagram/InstagramScreen3';
import InstagramScreen4 from './pages/instagram/InstagramScreen4';
import InstagramScreen5 from './pages/instagram/InstagramScreen5';
import InstagramScreen6 from './pages/instagram/InstagramScreen6';
import InstagramScreen7 from './pages/instagram/InstagramScreen7';
import InstagramScreen8 from './pages/instagram/InstagramScreen8';
import InstagramScreen9 from './pages/instagram/InstagramScreen9';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whatsapp/1" element={<WhatsAppScreen1 />} />
        <Route path="/whatsapp/2" element={<WhatsAppScreen2 />} />
        <Route path="/whatsapp/3" element={<WhatsAppScreen3 />} />
        <Route path="/whatsapp/4" element={<WhatsAppScreen4 />} />
        <Route path="/whatsapp/5" element={<WhatsAppScreen5 />} />
        <Route path="/whatsapp/6" element={<WhatsAppScreen6 />} />
        <Route path="/whatsapp/7" element={<WhatsAppScreen7 />} />
        <Route path="/whatsapp/8" element={<WhatsAppScreen8 />} />
        <Route path="/whatsapp/9" element={<WhatsAppScreen9 />} />
        <Route path="/instagram/1" element={<InstagramScreen1 />} />
        <Route path="/instagram/2" element={<InstagramScreen2 />} />
        <Route path="/instagram/3" element={<InstagramScreen3 />} />
        <Route path="/instagram/4" element={<InstagramScreen4 />} />
        <Route path="/instagram/5" element={<InstagramScreen5 />} />
        <Route path="/instagram/6" element={<InstagramScreen6 />} />
        <Route path="/instagram/7" element={<InstagramScreen7 />} />
        <Route path="/instagram/8" element={<InstagramScreen8 />} />
        <Route path="/instagram/9" element={<InstagramScreen9 />} />
      </Routes>
    </Router>
  );
};

export default App;
