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
      </Routes>
    </Router>
  );
};

export default App;
