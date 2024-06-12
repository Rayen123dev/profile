import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import stageimage1 from './Photo/download.jpg'; // Import the image
import stageimage2 from './Photo/images.jpg'; // Import the image
import Accordion from 'react-bootstrap/Accordion';
import './MyCarousel.css';


function Stage() {
    return (
        <div class="experience" id="experience">
            <div class="container">
                <header class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Resume</p>
                    <h2>Experience</h2>
                </header>
                <div class="timeline">
                    <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div class="timeline-text">
                            <div class="timeline-date">2021 - 2022</div>
                            <h2>LE CIMS</h2>
                            <h4>Centre Informatique du Ministère de la Santé</h4>
                            <p>Le Centre Informatique du Ministère de la Santé (CIMS), créé par la loi n°92-19 du 3 Février 1992 en tant qu’établissement public à caractère non administratif relevant du Ministère de la Santé. Il est acteur majeur dans le domaine  e-santé en Tunisie. Ses missions principales englobent le développement jusqu‘au déploiement du système d’information hospitalier et des services numériques ainsi que l’assistance et la formation continue. Il contribue à l’amélioration des conditions des prestations de soins tout en assurant l’accompagnement des structures sanitaires publiques dans leurs transformations numériques conformément aux règles de sécurité en vigueur.</p>
                        </div>
                    </div>
                    <div class="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div class="timeline-text">
                            <div class="timeline-date">2022 - 2023</div>
                            <h2>Horizon Data</h2>
                            <h4>Horizon data solutions IT</h4>
                            <p>Chez Horizon Data, nous fournissons des solutions informatiques et des services cloud pour les petites et moyennes entreprises. Notre agence de gestion des réseaux sociaux vous aide à tirer le meilleur parti de votre présence numérique en gérant votre réputation en ligne, tout en veillant à ce que vous atteigniez votre public cible.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Stage;
