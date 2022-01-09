import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Slider from '../Components/Slider';
import slide1 from "../Pictures/Themes/1.jpg"
import slide2 from "../Pictures/Themes/2.jpg"
import slide3 from "../Pictures/Themes/3.jpg"
import slide4 from "../Pictures/Themes/4.jpg"

export const Home = () => (
    <>
        <Slider/>
        <Container fluid style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <Row className="justify-content-md-center">
            <Col md="auto">
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={slide1}/>
                    <Card.Body>
                        <Card.Title>Тема1</Card.Title>
                        <Card.Text>
                            Краткое содержание темы 1
                        </Card.Text>
                        <Button>Перейти к изучению</Button>
                    </Card.Body>
                </Card>         
            </Col>
            <Col md="auto">
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={slide2}/>
                    <Card.Body>
                        <Card.Title>Тема1</Card.Title>
                        <Card.Text>
                            Краткое содержание темы 1
                        </Card.Text>
                        <Button>Перейти к изучению</Button>
                    </Card.Body>
                </Card>         
            </Col>
            <Col md="auto">
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={slide3}/>
                    <Card.Body>
                        <Card.Title>Тема1</Card.Title>
                        <Card.Text>
                            Краткое содержание темы 1
                        </Card.Text>
                        <Button>Перейти к изучению</Button>
                    </Card.Body>
                </Card>         
            </Col>
            <Col md="auto">
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={slide4}/>
                    <Card.Body>
                        <Card.Title>Тема1</Card.Title>
                        <Card.Text>
                            Краткое содержание темы 1
                        </Card.Text>
                        <Button>Перейти к изучению</Button>
                    </Card.Body>
                </Card>         
            </Col>
        </Row>
        </Container>
        
    </>
    )