import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import PresentationSection from './components/PresentationSection';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Header />
            <PresentationSection />
            <Footer />
        </div>
    );
};

export default Home;
