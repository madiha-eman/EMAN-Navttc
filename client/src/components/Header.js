import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import logo from './world.png'

const HandleLogout =()=>{
  const history = useHistory();

  useEffect(() => {
      axios.delete('http://localhost:4000/api/users/logout')
      .then(res=>{
        console.log(res)
        history.push('/login')
      })
      .catch(err=>console.log('....',err))
  }, [])
}

const Header = ({Logout}) => {
  return (
    <Navbar  className="header">
      <Navbar.Brand as={Link} to="/">
        <img src={logo} className='logo'/>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/users">
          Users
        </Nav.Link>
        <Nav.Link as={Link} to="/register">
          Register
        </Nav.Link>
        <Nav.Link as={Link} to="/posts">
          Posts
        </Nav.Link>
      
      <Nav.Link as={Link} to="/addpost">
          New Post
        </Nav.Link> 
        <Nav.Link as={Link} to="/login">
          Login
          </Nav.Link> 
          {Logout && 
         <Nav.Link as={Link} to="/logout" onClick={()=>HandleLogout()}>
          Logout
            </Nav.Link> 
            }


      </Nav>
    </Navbar>
  );
};

export default Header;
