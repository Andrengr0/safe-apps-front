import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

import EpisodeWhatsApp1 from './pages/whatsapp/episodios/Episodio_1';
import EpisodeWhatsApp2 from './pages/whatsapp/episodios/Episodio_2';

import EpisodeInstagram1 from './pages/instagram/episodios/Episodio_1';
import EpisodeInstagram2 from './pages/instagram/episodios/Episodio_2';
// Continue importando os episódios conforme necessário...
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whatsapp/episodio/1" element={<EpisodeWhatsApp1 />} />
        <Route path="/whatsapp/episodio/2" element={<EpisodeWhatsApp2 />} />
        {/* Continue adicionando rotas para os outros episódios de WhatsApp */}
        <Route path="/instagram/episodio/1" element={<EpisodeInstagram1 />} />
        <Route path="/instagram/episodio/2" element={<EpisodeInstagram2 />} />
        {/* Continue adicionando rotas para os outros episódios de Instagram */}
      </Routes>
    </Router>
  );
};

export default App;
