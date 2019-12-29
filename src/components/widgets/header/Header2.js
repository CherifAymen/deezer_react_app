import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import fire from '../../../config/Fire';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Header2 extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
              <SideNav
                  className="bg-dark mx-4"
                  onSelect={(selected) => {
                      // Add your code here
                  }}
              >
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="charts" >
                      <NavItem eventKey="home">
                          <NavIcon>
                          <Link className="nav-link" to="/"><i className="fa fa-fw fa-home py-2" style={{ fontSize: '1.75em' }} /></Link>
                          </NavIcon>
                          <NavText>
                          <Link className="nav-link" to="/">Accueil </Link>
                          </NavText>
                      </NavItem>
                      <NavItem eventKey="charts" >
                          <NavIcon>
                          <Link className="nav-link" to="/favorites"><i className="fas fa-heart py-2" style={{ fontSize: '1.75em' }}></i> </Link>
                          </NavIcon>
                          <NavText>
                          <Link className="nav-link" to="/favorites"> Favoris</Link>
                          </NavText>
                      </NavItem>
                      <NavItem eventKey="logout">
                          <NavIcon>
                          <Link className="nav-link" ><i class="fas fa-sign-out-alt py-2" style={{ fontSize: '1.75em' }} onClick={this.logout}/></Link>
                          </NavIcon>
                          <NavText>
                          <Link className="nav-link">
                          <span onClick={this.logout}>Logout</span>
                           </Link>
                          </NavText>
                      </NavItem>
                  </SideNav.Nav>
              </SideNav>
            </div>


        );

    }

}

export default Header2;
