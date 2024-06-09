import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import profileImage from './Photo/421263315_1397905640818721_7510468969976730858_n.jpg';
import EspritImage from './Photo/347577308_207215745475647_6392985624889672443_n.jpg';// Import the image
import IsticImage from './Photo/ISTIC.png';// Import the image
import Esprit from './esprit.js'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import './MyCarousel.css';

function cards() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <Container className="carousel-item-custom">
                    <div>
                        <center>
                            <img
                                className="d-block w-90"
                                src={profileImage}
                                alt="First slide"
                            />
                        </center>
                    </div>
                </Container>
                <Carousel.Caption>
                    <h5>Rayen Ben Massaoud</h5>
                    <p>Etudiant en ingenieurie informatique</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Container className="carousel-item-custom">

                    <Row>
                        <Col xs={12} md={6}>
                            <center>
                                <p>Je suis Rayen Ben Massaoud, un étudiant en première année de cycle ingénieur en informatique à l'ESPRIT (École Supérieure Privée d'Ingénierie et de Technologie) à Tunis. Titulaire d'un diplôme de Licence en Génie Logiciel et Système Informatique de l'ISTIC (Institut Supérieur des Technologies de l'Information et de la Communication), je suis passionné par le domaine de l'informatique et du développement de solutions innovantes.</p>
                            </center>
                        </Col>
                        <Col xs={12} md={3}>
                            <Image src={EspritImage} rounded />
                        </Col>
                        <Col xs={6} md={3}>
                            <Image src={IsticImage} rounded />
                        </Col>
                    </Row>

                </Container>
                <Carousel.Caption>
                    <h5 style={{ color: "#B0C4DE" }}>Information general</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}



export default cards;