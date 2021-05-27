import React from 'react'
import { Nav, Container } from 'react-bootstrap'
import '../components/header.css';

const Header = () => {
    return (
        <Container fluid className="p-0">
            <Nav expand="lg" className="Titular p-2">
                <Nav.Item > ComedyClub / </Nav.Item>
            </Nav>
        </Container>
    )
}

export default Header