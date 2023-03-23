
// REACT NEXT IMPORTS
import Head from 'next/head'
import Link from 'next/Link'
import Image from 'next/image'
import styles from './navbar.module.css'

// BOOTSTRAP IMPORTS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function NavBar({ children }) {
    return (
      <>
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={3}>
              <Container className={styles.container}>
              <Navbar key="sm" expand="sm" className="justify-content-center">
                <Nav className="flex-column align-items-center">
                      <div >
                        <Link href="/" className={styles.logo}>
                          <Image
                            src="/../public/images/logo.png"
                            alt="logo_icon"
                            fill
                            sizes="(max-width: 876px) 100vw,
                                  33vw"
                          />
                        </Link>
                      </div>

                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm"/>
                    <Navbar.Offcanvas 
                      id="offcanvasNavbar-expand-sm"
                      aria-labelledby="offcanvasNavbar-expand-sm"
                      placement="end"
                      className={styles.container}
                    >
                      <Offcanvas.Header closeButton closeVariant="white">
                        <Offcanvas.Title id="offcanvasNavbar-expand-sm">
                          Menu
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav className="flex-column h3">
                          <Nav.Item><Link href="/">Accueil</Link></Nav.Item>
                          <Nav.Item><Link href="">Carte</Link></Nav.Item>
                          <Nav.Item><Link href="">A propos</Link></Nav.Item>
                          <Nav.Item><Link href="">Reservations</Link></Nav.Item>
                        </Nav>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Nav>
              </Navbar>
                  </Container>
            </Col>
            <Col sm={8}>
              { children }
            </Col>
          </Row>
        </Container>
      </>
      );
  }
  