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
import EpisodeWhatsApp9 from './pages/whatsapp/episodios/Episodio_9';

import EpisodeInstagram1 from './pages/instagram/episodios/Episodio_1';
import EpisodeInstagram2 from './pages/instagram/episodios/Episodio_2';
import EpisodeInstagram3 from './pages/instagram/episodios/Episodio_3';
import EpisodeInstagram4 from './pages/instagram/episodios/Episodio_4';
import EpisodeInstagram5 from './pages/instagram/episodios/Episodio_5';
import EpisodeInstagram6 from './pages/instagram/episodios/Episodio_6';
import EpisodeInstagram7 from './pages/instagram/episodios/Episodio_7';
import EpisodeInstagram8 from './pages/instagram/episodios/Episodio_8';
import EpisodeInstagram9 from './pages/instagram/episodios/Episodio_9';

import EpisodeTiktok1 from './pages/tiktok/episodios/Episodio_1';
import EpisodeTiktok2 from './pages/tiktok/episodios/Episodio_2';
import EpisodeTiktok3 from './pages/tiktok/episodios/Episodio_3';
import EpisodeTiktok4 from './pages/tiktok/episodios/Episodio_4';
import EpisodeTiktok5 from './pages/tiktok/episodios/Episodio_5';


import QuizzWhatsapp from './pages/quizzes/quizzWhatsapp';
import QuizzInstagram from './pages/quizzes/quizzInstagram';
import QuizzTiktok from './pages/quizzes/quizzTiktok';

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
        <Route path="/whatsapp/episodio/9" element={<EpisodeWhatsApp9 />} />
        

        <Route path="/instagram/episodio/1" element={<EpisodeInstagram1 />} />
        <Route path="/instagram/episodio/2" element={<EpisodeInstagram2 />} />
        <Route path="/instagram/episodio/3" element={<EpisodeInstagram3 />} />
        <Route path="/instagram/episodio/4" element={<EpisodeInstagram4 />} />
        <Route path="/instagram/episodio/5" element={<EpisodeInstagram5 />} />
        <Route path="/instagram/episodio/6" element={<EpisodeInstagram6 />} />
        <Route path="/instagram/episodio/7" element={<EpisodeInstagram7 />} />
        <Route path="/instagram/episodio/8" element={<EpisodeInstagram8 />} />
        <Route path="/instagram/episodio/9" element={<EpisodeInstagram9 />} />

        <Route path="/tiktok/episodio/1" element={<EpisodeTiktok1 />} />
        <Route path="/tiktok/episodio/2" element={<EpisodeTiktok2 />} />
        <Route path="/tiktok/episodio/3" element={<EpisodeTiktok3 />} />
        <Route path="/tiktok/episodio/4" element={<EpisodeTiktok4 />} />
        <Route path="/tiktok/episodio/5" element={<EpisodeTiktok5 />} />


        <Route path="/quizzes/whatsapp" element={<QuizzWhatsapp />} />
        <Route path="/quizzes/instagram" element={<QuizzInstagram />} />
        <Route path="/quizzes/tiktok" element={<QuizzTiktok />} />
        
      </Routes>
    </Router>
  );
};

export default App;
