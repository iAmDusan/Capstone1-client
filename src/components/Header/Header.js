import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import ResultsContext from '../../contexts/ResultsContext'
import { withRouter } from 'react-router-dom';

class Header extends Component {

  static contextType = ResultsContext

  handleLogoutClick = () => {
    TokenService.clearAuthToken();

  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
  
      <div className="logout-button" style={{textDecoration: 'underline', color: 'blue', cursor: 'pointer'}} onClick={ () => {
        this.context.setLogout();
        this.handleLogoutClick()
        this.props.history.push("/")
      } }>
        Logout
      </div>

      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/login">Log in</Link>
        <Link to="/register">Register</Link>
      </div>
    );
  }

  render() {
    return (
      <>
        <nav className="Header">
          <h1>
            <Link to="/"> Home</Link>
          </h1>
          <span className="Header__tagline--wide">
            Darksky and Mapbox API development server.
          </span>
          
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
      </>
    );
  }
}

export default withRouter(Header)