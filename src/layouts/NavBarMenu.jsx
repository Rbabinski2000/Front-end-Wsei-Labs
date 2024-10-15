
import {Nav, Navbar} from 'react-bootstrap'
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

function NavBarMenu ({items}){
    return(
        
            <Navbar bg="light">
            <Navbar.Brand as={Link} to="/">My App</Navbar.Brand>
                {items.map((item)=>(
                    <Nav.Link as={Link} key={item.id}>
                        {item.label}
                    </Nav.Link>
                ))}
            </Navbar>
    )
}

NavBarMenu.propTypes={
    items:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            label:PropTypes.string.isRequired,
            url:PropTypes.string.isRequired
        })
    ).isRequired,
};



export default NavBarMenu