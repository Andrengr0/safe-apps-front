import React from 'react';
import Container from '@/components/container';
import CardSeries from './components/CardSeries';
import './SeriesSection.css';
import whatsappImage from '@/assets/images/img_whatsapp.png';
import instagramImage from '@/assets/images/img_instagram.png';
import tiktokImage from '@/assets/images/img_tiktok.png';
import cassinosImage from '@/assets/images/img_cassino.png';


const SeriesSection: React.FC = () => {
    // A plataforma correspondente foi adicionada a cada série
const seriesData = [
    {
        title: 'WhatsApp',
        description: 'Proteja suas conversas e dados no WhatsApp. Aprenda a evitar riscos e usar o app com confiança.',
        imageUrl: whatsappImage,
        platform: 'whatsapp',
        episodes: [
            { title: 'Episódio 01', description: 'Navegando com Segurança...' },
            { title: 'Episódio 02', description: 'Protegendo suas mensagens...' },
            // Mais episódios...
        ]
    },
    {
        title: 'Instagram',
        description: 'Descubra como proteger sua conta e navegar no Instagram com segurança e tranquilidade.',
        imageUrl: instagramImage,
        platform: 'instagram',
        episodes: [
            { title: 'Episódio 01', description: 'Navegando com Segurança...' },
            { title: 'Episódio 02', description: 'Protegendo suas mensagens...' },
            // Mais episódios...
        ]
    },
    {
        title: 'TikTok',
        description: 'Aprenda a usar o TikTok de forma segura, protegendo sua privacidade enquanto se diverte com vídeos.',
        imageUrl: tiktokImage,
        platform: 'tiktok',
        episodes: [
            { title: 'Episódio 01', description: 'Navegando com Segurança...' },
            { title: 'Episódio 02', description: 'Protegendo suas mensagens...' },
            // Mais episódios...
        ]
    },
    {
        title: 'Cassinos',
        description: 'Entenda os riscos dos jogos de azar e apostas online, e se defenda contra possíveis danos financeiros ou psicológicos.',
        imageUrl: cassinosImage,
        platform: 'cassinos',
        episodes: [
            { title: 'Episódio 01', description: 'Navegando com Segurança...' },
            { title: 'Episódio 02', description: 'Protegendo suas mensagens...' },
            // Mais episódios...
        ]
    }
];

    return (
        <div className="series-section">
            <Container>
                <h2 className="section-title">Escolha uma das nossas séries de aprendizado:</h2>
                <div className="series-card-container">
                    <div className="series-card-wrapper">
                        <div className="series-card-flex">
                            {seriesData.map((series, index) => (
                                <CardSeries
                                    key={index}
                                    title={series.title}
                                    description={series.description}
                                    imageUrl={series.imageUrl}
                                    episodes={series.episodes}
                                    platform={series.platform}  // Passando a plataforma correta para cada CardSeries
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default SeriesSection;
