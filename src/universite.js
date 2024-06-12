import React from 'react';
import './MyCarousel.css';
import ISTIC from './Photo/ISTIC.png';
import ESPRIT from './Photo/347577308_207215745475647_6392985624889672443_n.jpg';


function universite() {
    return (
        <div class="service" id="service">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>What I do</p>
                    <h2>Academic</h2>
                </div>
                <div class="row">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                        <div class="service-item">
                            <div class="service-icon">
                                <i class="fa fa-laptop">
                                    <img src={ISTIC} alt="Hero Image" width={100}></img>
                                </i>
                            </div>
                            <div class="service-text">
                                <h3>ISTIC</h3>
                                <p>
                                    L’Institut Supérieur des Technologies de l’Information et de la Communication est un établissement universitaire public appartenant à l’Université de Carthage. Il est situé dans la Technopole de Borj Cédria dans la banlieue sud de la ville de Tunis. Aujourd’hui, il est l'un des plus jeunes institutions de la Tunisie.
                                    Il est destiné à former des compétences dans les domaines de l’informatique, des Technologies de l’Information et de la Communication et de l’informatique industrielle
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="service-item">
                            <div class="service-icon">
                                <i class="fa fa-laptop-code">
                                    <img src={ESPRIT} alt="Hero Image" width={100}></img>
                                </i>
                            </div>
                            <div class="service-text">
                                <h3>ESPRIT</h3>
                                <p>
                                    Esprit, une institution éducative de premier plan, valorise l'excellence, l'innovation et le développement holistique. Elle crée un environnement où la rigueur académique, l'intégrité éthique et la responsabilité sociale sont primordiales. Esprit encourage la créativité, la pensée critique et le travail d'équipe, préparant ainsi ses étudiants à devenir des professionnels compétents et des citoyens responsables.                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default universite;
