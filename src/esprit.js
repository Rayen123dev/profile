import Card from 'react-bootstrap/Card';
import profileImage from './Photo/347577308_207215745475647_6392985624889672443_n.jpg';
import profileImage2 from './Photo/347577308_207215745475647_6392985624889672443_n.jpg';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

function esprit() {
    return (
        <Col>
            <Row>
                <Card className="bg-dark text-white">
                    <Card.Img src={profileImage} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Esprit</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Row>
            <Row>
                <Card className="bg-dark text-white">
                    <Card.Img src={profileImage2} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Istic</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Row>
        </Col>
    );
}

export default esprit;