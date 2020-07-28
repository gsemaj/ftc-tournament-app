import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Link from "next/link";

export default function Layout(props) {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Link href="/" passHref>
					<Navbar.Brand>
						<img src="/shapes.png" alt="FIRST Web App" />
					</Navbar.Brand>
				</Link>
				<Nav className="mr-auto">
					<Link href="/" passHref>
						<Nav.Link>Home</Nav.Link>
					</Link>
					<Link href="/dashboard" passHref>
						<Nav.Link>Dashboard</Nav.Link>
					</Link>
				</Nav>
			</Navbar>
			<Container className="py-3">
				<Alert variant="warning">
					Heads up-- this platform is still in development!
				</Alert>
				{props.children}
			</Container>
		</>
	);
}
