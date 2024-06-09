import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Figure from 'react-bootstrap/Figure';
import cvimage from './Photo/cv.jpg';// Import the image
import lettreimage from './Photo/Lm.jpg';// Import the image
import Container from 'react-bootstrap/Container';


function Piece() {
    return (
        <Container xs={6} md={10}>
            <center><h3 style={{ color: 'Black' }}>Piece joint</h3></center>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={6}>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">
                                CV professionnel
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                Lettre motivation
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={6}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                <Figure>
                                    <Figure.Image
                                        src={cvimage}
                                    />
                                    <Figure.Caption>
                                        cv professionnel
                                    </Figure.Caption>
                                </Figure>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                <Figure>
                                    <Figure.Image
                                        src={lettreimage}
                                    />
                                    <Figure.Caption>
                                        Lettre motivation
                                    </Figure.Caption>
                                </Figure>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}

export default Piece;