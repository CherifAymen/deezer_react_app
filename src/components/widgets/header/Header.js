import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import fire from '../../../config/Fire';

class Header extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (

            <div className="navbar navbar-dark bg-danger mb-4">
                <Link className="" to="/">Music App</Link>

                <div className="" id="">
                        <div className="nav-item active">
                            <Link className="nav-link" to="/"><i className="fas fa-home"></i> Accueil <span className="sr-only">(current)</span></Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/favorites"><i className="fas fa-star"></i> Favoris</Link>
                        </div>
                        <div className="nav-item">
                              <button onClick={this.logout}>Logout</button>
                        </div>

                </div>
            </div>
        );

    }

}

export default Header;
