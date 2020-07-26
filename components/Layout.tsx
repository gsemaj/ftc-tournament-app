import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

export default function Layout(props) {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/"><img src="/shapes.png" alt="FIRST Web App" /></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                </Nav>
            </Navbar>
            <Container className='py-3'>
                <Alert variant='warning'>
                    Heads up-- this platform is still in development!
                </Alert>
                {props.children}
            </Container>
        </>
    );
}