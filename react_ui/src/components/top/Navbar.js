import { Container, Navbar } from "react-bootstrap";
const NavbarTop = ({title})=>{
    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                <Navbar.Brand href="#">{title}</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    )
}

NavbarTop.defaultProps = {
    title : "Home"
}

export default NavbarTop;