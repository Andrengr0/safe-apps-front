import React from 'react';
import Container from '@/components/container';
import CardSeries from './components/CardSeries';
import './SeriesSection.css';
import whatsappImage from '@/assets/images/img_whatsapp.png';
import instagramImage from '@/assets/images/img_instagram.png';
import tiktokImage from '@/assets/images/img_tiktok.png';
// import cassinosImage from '@/assets/images/img_cassino.png';


const SeriesSection: React.FC = () => {
    // A plataforma correspondente foi adicionada a cada série
const seriesData = [
    {
        title: 'WhatsApp',
        description: 'Proteja suas conversas e dados no WhatsApp. Aprenda a evitar riscos e usar o app com confiança.',
        imageUrl: whatsappImage,
        platform: 'whatsapp',
        episodes: [
            { title: 'Episódio 01', description: 'Vamos aos primeiros passos para deixar seu whatsapp mais seguro' },
            { title: 'Episódio 02', description: 'Desafio: Repita o processo do vídeo sobre "verificação em duas etapas"' },
            { title: 'Episódio 03', description: 'Concluiu o  desafio? está no caminho certo!' },
            { title: 'Episódio 04', description: 'O que é e como criar uma senha forte?' },
            { title: 'Episódio 05', description: 'Recurso para bloquear determinada conversa no whatsapp' },
            { title: 'Episódio 06', description: 'Uma forma mais simples de entrar no whatsapp com senha' },
            { title: 'Episódio 07', description: 'Seu aplicativo está atualizado?' },
            { title: 'Episódio 08', description: 'Vamos observar dicas adicionais para fortalecer a segurança do seu aplicativo' },
            { title: 'Episódio 09', description: 'Que tal agora testar seus conhecimentos?' },
        ]
    },
    {
        title: 'Instagram',
        description: 'Descubra como proteger sua conta e navegar no Instagram com segurança e tranquilidade.',
        imageUrl: instagramImage,
        platform: 'instagram',
        episodes: [
            { title: 'Episódio 01', description: 'Primeiros passos para deixar seu Instagram mais seguro' },
            { title: 'Episódio 02', description: 'Desafio: "verificação em duas etapas"' },
            { title: 'Episódio 03', description: 'Você está no caminho certo' },
            { title: 'Episódio 04', description: 'Você sabe o que é uma senha forte e como criá-la?' },
            { title: 'Episódio 05', description: 'Que tal agora colocar mais privacidade no seu Instagram' },
            { title: 'Episódio 06', description: 'Como receber alertas sempre que tentarem entrar no seu Instagram' },
            { title: 'Episódio 07', description: 'Já verificou se seu aplicativo está atualizado?' },
            { title: 'Episódio 08', description: 'Dicas adicionais para fortalecer a segurança do seu aplicativo!' },
            { title: 'Episódio 09', description: 'Teste seus conhecimentos adquiridos!' },
        ]
    },
    {
        title: 'TikTok',
        description: 'Aprenda a usar o TikTok de forma segura, protegendo sua privacidade enquanto se diverte com vídeos.',
        imageUrl: tiktokImage,
        platform: 'tiktok',
        episodes: [
            { title: 'Episódio 01', description: 'Tiktok mais seguro' },
            { title: 'Episódio 02', description: 'Configuração da verificação em duas etapas' },
            { title: 'Episódio 03', description: 'Alertas de segurança' },
            { title: 'Episódio 04', description: 'Atualize seus aplicativos' },
            { title: 'Episódio 05', description: 'Utilize senhas fortes' },
        ]
    },
    // {
    //     title: 'Cassinos',
    //     description: 'Entenda os riscos dos jogos de apostas online, e se defenda contra possíveis danos financeiros ou psicológicos.',
    //     imageUrl: cassinosImage,
    //     platform: 'cassinos',
    //     episodes: [
    //         { title: 'Episódio 01', description: 'Navegando com Segurança...' },
    //         { title: 'Episódio 02', description: 'Protegendo suas mensagens...' },
    //         // Mais episódios...
    //     ]
    // }
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
                                    platform={series.platform}
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
