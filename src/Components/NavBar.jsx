// import React from 'react'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
// import { Link,useNavigate } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { useDispatch,useSelector } from 'react-redux';
// import { logOut } from '../Component/Redux'; 
// import { toast } from 'react-toastify';
// import { completeLogo,naac} from '../Images';

// import "../CSS/NavBar.css"

// const Navbar = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isLogin = useSelector(state => state.User.login);
//   // const Subject = useSelector(state => state.User.SubjectTeacher );
//   const Role = useSelector(state => state.User.Role);
//   const FirstName = useSelector(state => state.User.FirstName);
//   const LastName = useSelector(state => state.User.LastName);
//   const FullName = FirstName + " " + LastName;

//   const Click = () =>
//   {
//     navigate('/signin')
//   }

//   const Logout = () =>
//   {
//     navigate('/signin')
//     dispatch(logOut());
//     toast.info("You logout successfully")
//   }
  
//   return (
//     <div style={{margin:"1%"}}>
//       <Row className='NavBar'>
//         <Col className='PupULogo'>
//           <a href='/'><div style={{display:"flex", flexDirection:"row"}}><img src={completeLogo} className='NavbarPupLogo'/> <img src={naac} className='NaacRedLogo'/></div></a>
//         </Col>
//         <Col className='Box'>
//           <Link to={"/"} className='NavbarLink' >Home</Link>
//         </Col>
//         <Col className='Box'>
//           <Link to={"/faculty"} className='NavbarLink' >C.S.E Faculty</Link>
//         </Col>
//         <Col className='Box'>
//           <Link to={"/about"} className='NavbarLink' >About us</Link>
//         </Col>
//         <Col className='Box'>
//         <div className='ImportantLinks' style={{fontFamily:"cursive"}}>
//         <DropdownButton id="dropdown-basic-button" title="Important Links" variant='Secondary' >
//             <Dropdown.Item href="https://results.pupexamination.ac.in/uploaddatesheet/view-datesheet.php" target='_blank' className='Link'>Datesheet</Dropdown.Item>
//             <Dropdown.Item href="https://results.pupexamination.ac.in/t8/results/results.php" target='_blank' className='Link'>Result</Dropdown.Item>
//             <Dropdown.Item href="http://punjabiuniversity.ac.in/syllabi/Academic%20Session%202024-25/Faculty%20of%20Engineering/Computer%20Science%20and%20Engineering/B.Tech%204yr%20Batch2023%20BOS2024%20Syllabus.pdf" target='_blank' className='Link'>Download Syllabus</Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item href='https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=942222' target='_blank' className='Link'>Online fees payment</Dropdown.Item>
//           </DropdownButton>
//         </div>
          
//         </Col>
//         {
//           (!isLogin) ? <Col className='Box'>
//           <button type="submit" className="btn btn-success" onClick={Click}>Login</button>
//         </Col> :
//         <>
//         <>
//          {
//           (Role == 0) ? <Col className='Box'><Link to={"/users"} className='NavbarLink'>Users</Link></Col> :
//           (Role == 2) ? <Col className='Box'>
//           <Link to={"/dashboard"} className='NavbarLink'>Dashboard</Link>
//       </Col> : <Col className='Box'>
//             <Link to={"/student-detail"} className='NavbarLink'>Students Data</Link>
//         </Col>
//          }
//         </>
//           <Col className='Box'>
//         <div className='Profile'>
//         <DropdownButton id="dropdown-basic-button" title={FullName} variant='Secondary' style={{fontSize:"larger",fontFamily:"cursive"}}>
//           <div className='Link'><button style={{width:"100%",backgroundColor:"white",border:"none"}} onClick={() => {navigate('/profile')}}>Profile</button></div>
//           <div className='Link'>
//           {(Role == 2) ? <Col><button style={{width:"100%",backgroundColor:"white",border:"none"}} onClick={() => {navigate('/dashboard')}}>Dashboard</button></Col> : <>{(Role == 1) ? <Col><button style={{width:"100%",backgroundColor:"white",border:"none"}} onClick={() => {navigate('/student-detail')}}>Students Detail</button></Col> : <Col><button style={{width:"100%",backgroundColor:"white",border:"none"}} onClick={() => {navigate('/signup')}}>Create Account</button></Col>}</> }
//           </div>
//             <Dropdown.Divider />
//             <div className='button'>
//             <button type="submit" className="btn btn-danger" onClick={Logout}>Log out</button>
//             </div>
//           </DropdownButton> 
//         </div>
//         </Col>
//         <Col className='threeLine'>
//          <button style={{color:"white",backgroundColor:"rgba(141, 145, 144,00)",border:'none',width:"7%"}}>
//          <PiDotsThreeOutlineVerticalBold />
//          </button>
            
//         </Col>
//         </>
//         }
//       </Row>
//     </div>
//   )
// }

// export default Navbar


// import React from 'react';
// import { Navbar, Nav, NavDropdown, Container, Dropdown } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logOut } from '../Component/Redux';
// import { toast } from 'react-toastify';
// import { completeLogo, naac } from '../Images';

// import "../CSS/NavBar.css";

// const MyNavbar = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isLogin = useSelector(state => state.User.login);
//   const Role = useSelector(state => state.User.Role);
//   const FirstName = useSelector(state => state.User.FirstName);
//   const LastName = useSelector(state => state.User.LastName);
//   const FullName = FirstName + " " + LastName;

//   const Click = () => {
//     navigate('/signin');
//   };

//   const Logout = () => {
//     navigate('/signin');
//     dispatch(logOut());
//     toast.info("You logout successfully");
//   };

//   return (
//     <Navbar expand="md" bg="light" className="NavBar px-3">
//       <Container fluid>
//         {/* Logo */}
//         <Navbar.Brand href="/">
//           <div style={{display:"flex", flexDirection:"row"}}>
//             <img src={completeLogo} className="NavbarPupLogo" alt="PUP Logo"/>
//             <img src={naac} className="NaacRedLogo" alt="Naac Logo"/>
//           </div>
//         </Navbar.Brand>

//         {/* Hamburger */}
//         <Navbar.Toggle aria-controls="navbar-nav" />

//         {/* Links */}
//         <Navbar.Collapse id="navbar-nav" className="justify-content-end">
//           <Nav className="align-items-center">
//             <Link to="/" className="NavbarLink nav-link">Home</Link>
//             <Link to="/faculty" className="NavbarLink nav-link">C.S.E Faculty</Link>
//             <Link to="/about" className="NavbarLink nav-link">About Us</Link>

//             <NavDropdown title="Important Links" id="important-links" className="ImportantLinks">
//               <NavDropdown.Item href="https://results.pupexamination.ac.in/uploaddatesheet/view-datesheet.php" target="_blank">Datesheet</NavDropdown.Item>
//               <NavDropdown.Item href="https://results.pupexamination.ac.in/t8/results/results.php" target="_blank">Result</NavDropdown.Item>
//               <NavDropdown.Item href="http://punjabiuniversity.ac.in/syllabi/Academic%20Session%202024-25/Faculty%20of%20Engineering/Computer%20Science%20and%20Engineering/B.Tech%204yr%20Batch2023%20BOS2024%20Syllabus.pdf" target="_blank">Download Syllabus</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=942222" target="_blank">Online Fees Payment</NavDropdown.Item>
//             </NavDropdown>

//             {!isLogin ? (
//               <button type="submit" className="btn btn-success ms-2" onClick={Click}>Login</button>
//             ) : (
//               <>
//                 {Role === 0 && <Link to="/users" className="NavbarLink nav-link">Users</Link>}
//                 {Role === 2 && <Link to="/dashboard" className="NavbarLink nav-link">Dashboard</Link>}
//                 {Role === 1 && <Link to="/student-detail" className="NavbarLink nav-link">Students Data</Link>}

//                 <NavDropdown title={FullName} id="profile-dropdown" className="Profile ms-2">
//                   <NavDropdown.Item onClick={() => navigate('/profile')}>Profile</NavDropdown.Item>
//                   {Role === 2 && <NavDropdown.Item onClick={() => navigate('/dashboard')}>Dashboard</NavDropdown.Item>}
//                   {Role === 1 && <NavDropdown.Item onClick={() => navigate('/student-detail')}>Students Detail</NavDropdown.Item>}
//                   {Role === 0 && <NavDropdown.Item onClick={() => navigate('/signup')}>Create Account</NavDropdown.Item>}
//                   <NavDropdown.Divider />
//                   <NavDropdown.Item onClick={Logout} className="text-danger">Log out</NavDropdown.Item>
//                 </NavDropdown>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default MyNavbar;




// import React, { useState } from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
// import { Link, useNavigate } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { useDispatch, useSelector } from 'react-redux';
// import { logOut } from '../Component/Redux'; 
// import { toast } from 'react-toastify';
// import { completeLogo, naac } from '../Images';

// import "../CSS/NavBar.css";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isLogin = useSelector(state => state.User.login);
//   const Role = useSelector(state => state.User.Role);
//   const FirstName = useSelector(state => state.User.FirstName);
//   const LastName = useSelector(state => state.User.LastName);
//   const FullName = FirstName + " " + LastName;

//   const [menuOpen, setMenuOpen] = useState(false);

//   const Click = () => {
//     navigate('/signin');
//   };

//   const Logout = () => {
//     navigate('/signin');
//     dispatch(logOut());
//     toast.info("You logout successfully");
//   };

//   return (
//     <div style={{ margin: "1%" }}>
//       <Row className="NavBar align-items-center">
//         {/* Logo */}
//         <Col xs={8} md={3} className="PupULogo">
//           <a href='/'>
//             <div style={{ display: "flex", flexDirection: "row" }}>
//               <img src={completeLogo} className='NavbarPupLogo' alt="logo"/>
//               <img src={naac} className='NaacRedLogo' alt="naac"/>
//             </div>
//           </a>
//         </Col>

//         {/* Desktop Menu */}
//         <Col md={9} className="d-none d-md-flex justify-content-end">
//           <Link to="/" className='NavbarLink'>Home</Link>
//           <Link to="/faculty" className='NavbarLink'>C.S.E Faculty</Link>
//           <Link to="/about" className='NavbarLink'>About us</Link>

//           <DropdownButton id="dropdown-basic-button" title="Important Links" variant='Secondary'>
//             <Dropdown.Item href="https://results.pupexamination.ac.in/uploaddatesheet/view-datesheet.php" target='_blank'>Datesheet</Dropdown.Item>
//             <Dropdown.Item href="https://results.pupexamination.ac.in/t8/results/results.php" target='_blank'>Result</Dropdown.Item>
//             <Dropdown.Item href="http://punjabiuniversity.ac.in/syllabi/Academic%20Session%202024-25/Faculty%20of%20Engineering/Computer%20Science%20and%20Engineering/B.Tech%204yr%20Batch2023%20BOS2024%20Syllabus.pdf" target='_blank'>Download Syllabus</Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item href='https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=942222' target='_blank'>Online fees payment</Dropdown.Item>
//           </DropdownButton>

//           {!isLogin ? (
//             <button type="submit" className="btn btn-success ms-2" onClick={Click}>Login</button>
//           ) : (
//             <>
//               {Role === 0 && <Link to="/users" className='NavbarLink'>Users</Link>}
//               {Role === 2 && <Link to="/dashboard" className='NavbarLink'>Dashboard</Link>}
//               {Role === 1 && <Link to="/student-detail" className='NavbarLink'>Students Data</Link>}

//               <DropdownButton id="dropdown-basic-button" title={FullName} variant='Secondary'>
//                 <Dropdown.Item onClick={() => navigate('/profile')}>Profile</Dropdown.Item>
//                 {Role === 2 && <Dropdown.Item onClick={() => navigate('/dashboard')}>Dashboard</Dropdown.Item>}
//                 {Role === 1 && <Dropdown.Item onClick={() => navigate('/student-detail')}>Students Detail</Dropdown.Item>}
//                 {Role === 0 && <Dropdown.Item onClick={() => navigate('/signup')}>Create Account</Dropdown.Item>}
//                 <Dropdown.Divider />
//                 <Dropdown.Item onClick={Logout} className="text-danger">Log out</Dropdown.Item>
//               </DropdownButton>
//             </>
//           )}
//         </Col>

//         {/* Mobile Hamburger */}
//         <Col xs={4} className="d-md-none text-end">
//           <button 
//             style={{ color: "white", background: "transparent", border: 'none', fontSize: "1.8rem" }}
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <PiDotsThreeOutlineVerticalBold />
//           </button>
//         </Col>
//       </Row>

//       {/* Mobile Menu Dropdown */}
//       {menuOpen && (
//         <div className="MobileMenu d-md-none p-3" style={{ background: "#f8f9fa", borderRadius: "8px" }}>
//           <Link to="/" className='NavbarLink d-block mb-2'>Home</Link>
//           <Link to="/faculty" className='NavbarLink d-block mb-2'>C.S.E Faculty</Link>
//           <Link to="/about" className='NavbarLink d-block mb-2'>About us</Link>

//           <DropdownButton id="dropdown-basic-button-mobile" title="Important Links" variant='Secondary'>
//             <Dropdown.Item href="https://results.pupexamination.ac.in/uploaddatesheet/view-datesheet.php" target='_blank'>Datesheet</Dropdown.Item>
//             <Dropdown.Item href="https://results.pupexamination.ac.in/t8/results/results.php" target='_blank'>Result</Dropdown.Item>
//             <Dropdown.Item href="http://punjabiuniversity.ac.in/syllabi/Academic%20Session%202024-25/Faculty%20of%20Engineering/Computer%20Science%20and%20Engineering/B.Tech%204yr%20Batch2023%20BOS2024%20Syllabus.pdf" target='_blank'>Download Syllabus</Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item href='https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=942222' target='_blank'>Online fees payment</Dropdown.Item>
//           </DropdownButton>

//           {!isLogin ? (
//             <button type="submit" className="btn btn-success w-100 mt-2" onClick={Click}>Login</button>
//           ) : (
//             <>
//               {Role === 0 && <Link to="/users" className='NavbarLink d-block mb-2'>Users</Link>}
//               {Role === 2 && <Link to="/dashboard" className='NavbarLink d-block mb-2'>Dashboard</Link>}
//               {Role === 1 && <Link to="/student-detail" className='NavbarLink d-block mb-2'>Students Data</Link>}

//               <DropdownButton id="dropdown-basic-button-profile" title={FullName} variant='Secondary'>
//                 <Dropdown.Item onClick={() => navigate('/profile')}>Profile</Dropdown.Item>
//                 {Role === 2 && <Dropdown.Item onClick={() => navigate('/dashboard')}>Dashboard</Dropdown.Item>}
//                 {Role === 1 && <Dropdown.Item onClick={() => navigate('/student-detail')}>Students Detail</Dropdown.Item>}
//                 {Role === 0 && <Dropdown.Item onClick={() => navigate('/signup')}>Create Account</Dropdown.Item>}
//                 <Dropdown.Divider />
//                 <Dropdown.Item onClick={Logout} className="text-danger">Log out</Dropdown.Item>
//               </DropdownButton>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../Component/Redux';
import { toast } from 'react-toastify';
import { completeLogo, naac } from '../Images';

import "../CSS/NavBar.css";

const MyNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.User.login);
  const Role = useSelector(state => state.User.Role);
  const FirstName = useSelector(state => state.User.FirstName);
  const LastName = useSelector(state => state.User.LastName);
  const FullName = FirstName + " " + LastName;

  const [expanded, setExpanded] = useState(false);
  const navRef = useRef();

  const Click = () => {
    navigate('/signin');
    setExpanded(false);
  };

  const Logout = () => {
    navigate('/signin');
    dispatch(logOut());
    toast.info("You logout successfully");
    setExpanded(false);
  };

  // Close navbar when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Navbar 
      expand="md" 
      className="NavBar px-3" 
      expanded={expanded} 
      ref={navRef}
    >
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <img src={completeLogo} className="NavbarPupLogo" alt="PUP Logo"/>
            <img src={naac} className="NaacRedLogo ms-2" alt="Naac Logo"/>
          </div>
        </Navbar.Brand>

        {/* Hamburger */}
        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)} 
        />

        {/* Links */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-4">
            <Link to="/" className="NavbarLink nav-link" onClick={() => setExpanded(false)}>Home</Link>
            <Link to="/faculty" className="NavbarLink nav-link" onClick={() => setExpanded(false)}>C.S.E Faculty</Link>
            <Link to="/about" className="NavbarLink nav-link" onClick={() => setExpanded(false)}>About Us</Link>

            <NavDropdown title="Important Links" id="important-links" className="ImportantLinks NavbarLink nav-link">
              <NavDropdown.Item href="https://ds19.pupexamination.ac.in/uploaddatesheet/view-datesheet.php" target="_blank">Datesheet</NavDropdown.Item>
              <NavDropdown.Item href="https://results.pupexamination.ac.in/t8/results/results.php" target="_blank">Result</NavDropdown.Item>
              <NavDropdown.Item href="https://punjabiuniversity.ac.in/indexSyllabi.aspx" target="_blank">Download Syllabus</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.onlinesbi.sbi/sbicollect/" target="_blank">Online Fees Payment</NavDropdown.Item>
            </NavDropdown>

            {!isLogin ? (
              <button type="submit" className="btn btn-success ms-2" onClick={Click}>Login</button>
            ) : (
              <>
                {Role === 0 && <Link to="/users" className="NavbarLink nav-link" onClick={() => setExpanded(false)}>Users</Link>}
                {Role === 2 && <Link to="/dashboard" className="NavbarLink nav-link" onClick={() => setExpanded(false)}>Dashboard</Link>}
                {Role === 1 && <Link to="/student-detail" className="NavbarLink nav-link" onClick={() => setExpanded(false)}>Students Data</Link>}

                <NavDropdown title={FullName} id="profile-dropdown" className="Profile ms-2">
                  <NavDropdown.Item onClick={() => {navigate('/profile'); setExpanded(false);}}>Profile</NavDropdown.Item>
                  {Role === 2 && <NavDropdown.Item onClick={() => {navigate('/dashboard'); setExpanded(false);}}>Dashboard</NavDropdown.Item>}
                  {Role === 1 && <NavDropdown.Item onClick={() => {navigate('/student-detail'); setExpanded(false);}}>Students Detail</NavDropdown.Item>}
                  {Role === 0 && <NavDropdown.Item onClick={() => {navigate('/signup'); setExpanded(false);}}>Create Account</NavDropdown.Item>}
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={Logout} className="text-danger">Log out</NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
