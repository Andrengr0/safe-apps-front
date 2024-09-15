import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import SobreSection from '@/components/SobreSection';
import './Sobre.css';

const Sobre: React.FC = () => {
    return (
        <div>
            <Header/>
            <div className='container-sobre'>
                <SobreSection />
            </div>
            <Footer />
        </div>
    );
};

export default Sobre;