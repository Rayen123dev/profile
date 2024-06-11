import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
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


function competence() {
    return (
        <Container>
            <center><h3 style={{ color: 'Black' }}>Competence</h3></center>
            <br></br>
            <center>
                <Row>
                    <Col xs={6} md={3}>
                        <Image src={c} rounded width={50} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={java} rounded width={50} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={Python} rounded width={50} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={dart} rounded width={50} />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs={6} md={3}>
                        <Image src={html} rounded width={50} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={css} rounded width={75} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={php} rounded width={70} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Image src={js} rounded width={50} />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs={6} md={6}>
                        <Image src={sql} rounded width={70} />
                    </Col>
                    <Col xs={6} md={6}>
                        <Image src={fb} rounded width={50} />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs={6} md={6}>
                        <Image src={flutter} rounded width={50} />
                    </Col>
                    <Col xs={6} md={6}>
                        <Image src={flutterflow} rounded width={50} />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs={6} md={1}>

                    </Col>
                    <Col xs={6} md={2}>
                        <Image src={react} rounded width={70} />
                    </Col>
                    <Col xs={6} md={2}>
                        <Image src={angular} rounded width={50} />
                    </Col>
                    <Col xs={6} md={2}>
                        <Image src={javafx} rounded width={65} />
                    </Col>
                    <Col xs={6} md={2}>
                        <Image src={springboot} rounded width={50} />
                    </Col>
                    <Col xs={6} md={2}>
                        <Image src={symfoney} rounded width={50} />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs={6} md={6}>
                        <Image src={cisko} rounded width={50} />
                    </Col>
                    <Col xs={6} md={6}>
                        <Image src={photoshop} rounded width={50} />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs={6} md={6}>
                        <Image src={windows} rounded width={150} />
                    </Col>
                    <Col xs={6} md={6}>
                        <Image src={unix} rounded width={150} />
                    </Col>
                </Row>
            </center>
        </Container>
    );
}

export default competence;