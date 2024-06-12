import React from 'react';
import c from './Photo/c.png';
import java from './Photo/java.png';
import Python from './Photo/Python-logo-notext.svg.png';
import dart from './Photo/Dart.png';
import js from './Photo/js.png';
import php from './Photo/PHP-logo.svg.png';
import css from './Photo/CSS-Logo.png';
import html from './Photo/HTML.png';
import sql from './Photo/sql.png';
import fb from './Photo/fb.png';
import flutter from './Photo/flutter.png';
import flutterflow from './Photo/flutterFlow.png';
import symfoney from './Photo/symfoney.png';
import springboot from './Photo/spring-boot-logo.png';
import javafx from './Photo/JavaFX.png';
import angular from './Photo/angular.png';
import react from './Photo/reactjs.png';
import cisko from './Photo/cisko.png';
import photoshop from './Photo/ps.png';
import unix from './Photo/unix.png';
import windows from './Photo/windows.png';
import './MyCarousel.css';


const skills = [
    {
        category: 'Programming Languages',
        items: [
            { src: c, name: 'C' },
            { src: java, name: 'Java' },
            { src: Python, name: 'Python' },
            { src: dart, name: 'Dart' },
            { src: js, name: 'JavaScript' },
            { src: php, name: 'PHP' },
        ],
    },
    {
        category: 'Web Development',
        items: [
            { src: html, name: 'HTML' },
            { src: css, name: 'CSS' },
            { src: react, name: 'React' },
            { src: angular, name: 'Angular' },
            { src: symfoney, name: 'Symfony' },
            { src: springboot, name: 'Spring Boot' },
            { src: javafx, name: 'JavaFX' },
        ],
    },
    {
        category: 'Mobile Development',
        items: [
            { src: flutter, name: 'Flutter' },
            { src: flutterflow, name: 'FlutterFlow' },
        ],
    },
    {
        category: 'Databases',
        items: [
            { src: sql, name: 'SQL' },
            { src: fb, name: 'Firebase' },
        ],
    },
    {
        category: 'Operating Systems',
        items: [
            { src: windows, name: 'Windows' },
            { src: unix, name: 'Unix' },
        ],
    },
    {
        category: 'Tools and Platforms',
        items: [
            { src: cisko, name: 'Cisco' },
            { src: photoshop, name: 'Photoshop' },
        ],
    },
];

function Competence() {
    return (
        <div className="team" id="team">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Skills</p>
                    <h2>Expert Skills</h2>
                </div>
                {skills.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                        <div className="row">
                            {category.items.map((skill, skillIndex) => (
                                <div className="col-lg-3 wow fadeInUp" data-wow-delay={`${0.4 * skillIndex}s`} key={skill.name}>
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img src={skill.src} alt={skill.name} width={40} />
                                        </div>
                                        <div className="team-text">
                                            <h2>{skill.name}</h2>
                                            <p>
                                                {category.category}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Competence;
