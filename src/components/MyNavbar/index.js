import React from 'react';
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

class MyNavbar extends React.Component {
  render() {
    const logMeOut = (e) => {
      e.preventDefault();
      firebase.auth().signOut();
    };
    const { user } = this.props;
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>Adventure Logbook</NavbarBrand>
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
                <img
                  className='userInfo'
                  src={user?.photoURL}
                  alt={user?.displayName}
                />
                <UncontrolledDropdown className="logout-dropdown">
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
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
