import React, { useState } from 'react';
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';
import {
  Collapse,
  NavbarToggler,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export default function MyNavbar({ user }) {
  const logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>The Adventure Logbook</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <Link className='nav-link' to='/'>
                Find A Climb
              </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/todo'>
                To-Do List
              </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/logbook'>
                Logbook
              </Link>
            </NavItem>
            {user && (
              <>
              <div className="userImgWrapper">
              <img
                  className='userInfo'
                  src={user?.photoURL}
                  alt={user?.displayName}
                />
              </div>

                <UncontrolledDropdown className='logout-dropdown'>
                  <DropdownToggle nav caret></DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>{user?.displayName}</DropdownItem>
                    <DropdownItem>
                      <div
                        className='nav-link btn btn-danger'
                        onClick={(e) => logMeOut(e)}
                      >
                        Logout
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
