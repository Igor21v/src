import React, {useState} from 'react';
import { Button, Nav, Navbar, Container, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Stales = styled.div`
a, .navbar-brand, .navbar-nav, .nav-link {
    color: #adb1b8;
    &:hover {
        color: white
    }
}
`

export default function Navibar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Stales>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Link to="/themes">
                            <Navbar.Brand>
                                <img
                                    src="/logo.svg"
                                    width="40"
                                    height="40"
                                    className="d-inline-block align-top"
                                    alt="Ошибка импорта логотипа"
                                />
                            </Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className='me-auto'>
                                <Nav.Link> <Link to="/themes">Темы</Link> </Nav.Link>
                                <Nav.Link> <Link to="/">Личный кабинет</Link> </Nav.Link>
                                <Nav.Link> <Link to="/about">О портале</Link> </Nav.Link>
                            </Nav>
                            <Nav>
                                <Button variant='primary' onClick={handleShow}>Войти</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Stales>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Вход в учетную запись</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Email адрес</Form.Label>
                            <Form.Control type="email" placeholder='Введите email' />
                            <Form.Text muted> Мы не продоставляем ваш email кому то ещё</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password" placeholder='Введите пароль' />
                        </Form.Group>
                        <Form.Group controlId="fromBasicCheckbox">
                            <Form.Check type="checkbox" label='запомнить меня' />
                        </Form.Group>
                    </Form>
                </Modal.Body>

            </Modal>
            
        </>
    );
}