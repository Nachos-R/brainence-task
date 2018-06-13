import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTitle } from '../actions/get';
import { isLogged } from '../actions/login';

const Header = (props) => (
  <header>
    <p>LOGO</p>
    {props && <h1>Hi, {props.getData.title}</h1>}
    <Link to="/login" onClick={() => {
      props.dispatch(getTitle({}));
      props.dispatch(isLogged(false));
    }}>Logout</Link>
  </header>
);

const mapStateToProps = (state) => {
  return {
    getData: state.getData,
    login: state.login
  }
}


export default connect(mapStateToProps)(Header);