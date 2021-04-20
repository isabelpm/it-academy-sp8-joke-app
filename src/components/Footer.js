import React from 'react'
import { Container } from 'react-bootstrap'
import '../components/footer.css';

const Footer = () => {
    return (
        <Container fluid className="p-0">
            <ul expand="lg" className="App-footer p-2 justify-text-center">
                <li > / • By Isabel PM • / </li>
            </ul>
        </Container>
    )
}

export default Footer