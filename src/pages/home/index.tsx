import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import PresentationSection from './components/PresentationSection';
import SeriesSection from './components/SeriesSection';
import CuriositySection from './components/CuriositySection';
import './Home.css';
import SobreSection from '../../components/SobreSection';
import QuizzSection from './components/QuizzSection';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Header />
            <PresentationSection />
            <SeriesSection />
            <QuizzSection />
            <CuriositySection />
            <SobreSection />
            <Footer />
        </div>
    );
};

export default Home;
