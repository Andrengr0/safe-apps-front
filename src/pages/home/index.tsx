import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import PresentationSection from './components/PresentationSection';
import SeriesSection from './components/SeriesSection';
import CuriositySection from './components/CuriositySection';
import './Home.css';
import SobreSection from './components/SobreSection';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Header />
            <PresentationSection />
            <SeriesSection />
            <CuriositySection />
            <SobreSection />
            <Footer />
        </div>
    );
};

export default Home;
