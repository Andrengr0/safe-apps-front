import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

import EpisodeWhatsApp1 from './pages/whatsapp/episodios/Episodio_1';
import EpisodeWhatsApp2 from './pages/whatsapp/episodios/Episodio_2';
import EpisodeWhatsApp3 from './pages/whatsapp/episodios/Episodio_3';
import EpisodeWhatsApp4 from './pages/whatsapp/episodios/Episodio_4';
import EpisodeWhatsApp5 from './pages/whatsapp/episodios/Episodio_5';
import EpisodeWhatsApp6 from './pages/whatsapp/episodios/Episodio_6';
import EpisodeWhatsApp7 from './pages/whatsapp/episodios/Episodio_7';
import EpisodeWhatsApp8 from './pages/whatsapp/episodios/Episodio_8';

import EpisodeInstagram1 from './pages/instagram/episodios/Episodio_1';
import EpisodeInstagram2 from './pages/instagram/episodios/Episodio_2';
import EpisodeInstagram3 from './pages/instagram/episodios/Episodio_3';
import EpisodeInstagram4 from './pages/instagram/episodios/Episodio_4';
import EpisodeInstagram5 from './pages/instagram/episodios/Episodio_5';
import EpisodeInstagram6 from './pages/instagram/episodios/Episodio_6';
import EpisodeInstagram7 from './pages/instagram/episodios/Episodio_7';
import EpisodeInstagram8 from './pages/instagram/episodios/Episodio_8';

import QuizzWhatsapp from './pages/quizzes/quizzWhatsapp';
import './App.css';

import Sobre from './pages/sobre';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre/>} />


        <Route path="/whatsapp/episodio/1" element={<EpisodeWhatsApp1 />} />
        <Route path="/whatsapp/episodio/2" element={<EpisodeWhatsApp2 />} />
        <Route path="/whatsapp/episodio/3" element={<EpisodeWhatsApp3 />} />
        <Route path="/whatsapp/episodio/4" element={<EpisodeWhatsApp4 />} />
        <Route path="/whatsapp/episodio/5" element={<EpisodeWhatsApp5 />} />
        <Route path="/whatsapp/episodio/6" element={<EpisodeWhatsApp6 />} />
        <Route path="/whatsapp/episodio/7" element={<EpisodeWhatsApp7 />} />
        <Route path="/whatsapp/episodio/8" element={<EpisodeWhatsApp8 />} />
        

        <Route path="/instagram/episodio/1" element={<EpisodeInstagram1 />} />
        <Route path="/instagram/episodio/2" element={<EpisodeInstagram2 />} />
        <Route path="/instagram/episodio/3" element={<EpisodeInstagram3 />} />
        <Route path="/instagram/episodio/4" element={<EpisodeInstagram4 />} />
        <Route path="/instagram/episodio/5" element={<EpisodeInstagram5 />} />
        <Route path="/instagram/episodio/6" element={<EpisodeInstagram6 />} />
        <Route path="/instagram/episodio/7" element={<EpisodeInstagram7 />} />
        <Route path="/instagram/episodio/8" element={<EpisodeInstagram8 />} />


        <Route path="/quizzes/whatsapp" element={<QuizzWhatsapp />} />
        <Route path="/quizzes/instagram" element={<QuizzWhatsapp />} />
        
      </Routes>
    </Router>
  );
};

export default App;
