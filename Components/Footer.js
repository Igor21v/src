import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
        <Container fluid style={{backgroundColor: '#212529', color: 'gray'}}>
            <Container style={{display: 'flex', justifyContent: 'center', padding: '5px',
             fontSize: "80%", fontStyle: "italic", lineHeight: "1"}}>
                <p>2022 г. Усть-Илимск, Иркутская область.</p>
                <p>По вопросам индивидуального обучения обращайтесь по телефону 8-950-11-66-910 
                    - Уварова Нина Викторовна. Обучение возможно как в очном так и удаленном формате</p>
            </Container>
        </Container>
)

export default Footer;


/* const Footer = () => (
    <Container fluid style={{backgroundColor: '#212529', color: 'gray'}}>
        <Container style={{padding: '15px', fontSize: "80%", fontStyle: "italic", lineHeight: "0"}}>
            <p>2022 г. Усть-Илимск, Иркутская область.</p>
            <p>По вопросам индивидуального обучения обращайтесь по телефону 8-950-11-66-910 
                - Уварова Нина Викторовна. Обучение возможно как в очном так и удаленном формате</p>
        </Container>
    </Container>
)

export default Footer; */