
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import stageimage1 from './Photo/download.jpg'; // Import the image
import stageimage2 from './Photo/images.jpg'; // Import the image
import { ListGroupItem } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function Stage() {
    return (
        <Container xs={6} md={10}>
            <center><h3 style={{ color: 'Black' }}>Stages Profesionel</h3></center>
            <br></br>
            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>CIMS</Accordion.Header>
                    <Accordion.Body>
                        <center>
                            <Container>
                                <center>
                                    <Row>
                                        <Col xs={6} md={6}>
                                            <Image src={stageimage1} thumbnail />
                                        </Col>
                                        <Col xs={6} md={6}>
                                            <h4>LE CIMS</h4>
                                            <h5>Centre Informatique du Ministère de la Santé</h5>
                                            <br></br>
                                            <p>Le Centre Informatique du Ministère de la Santé (CIMS), créé par la loi n°92-19 du 3 Février 1992 en tant qu’établissement public à caractère non administratif relevant du Ministère de la Santé. Il est acteur majeur dans le domaine  e-santé en Tunisie. Ses missions principales englobent le développement jusqu‘au déploiement du système d’information hospitalier et des services numériques ainsi que l’assistance et la formation continue. Il contribue à l’amélioration des conditions des prestations de soins tout en assurant l’accompagnement des structures sanitaires publiques dans leurs transformations numériques conformément aux règles de sécurité en vigueur.</p>
                                        </Col>
                                    </Row>
                                </center>
                            </Container>
                        </center>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Data Horizon</Accordion.Header>
                    <Accordion.Body>
                        <center>
                            <Container>
                                <center>
                                    <Row>
                                        <Col xs={6} md={6}>
                                            <Image src={stageimage2} thumbnail />
                                        </Col>
                                        <Col xs={6} md={6}>
                                            <h4>Horizon Data</h4>
                                            <h5>Horizon data solutions IT</h5>
                                            <br></br>
                                            <p>Chez Horizon Data, nous fournissons des solutions informatiques et des services cloud pour les petites et moyennes entreprises. Notre agence de gestion des réseaux sociaux vous aide à tirer le meilleur parti de votre présence numérique en gérant votre réputation en ligne, tout en veillant à ce que vous atteigniez votre public cible.</p>
                                        </Col>
                                    </Row>
                                </center>
                            </Container>
                        </center>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}



export default Stage;