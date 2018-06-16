import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTitle } from '../actions/get';
import { isLogged } from '../actions/login';
import { showAlbums } from '../actions/show';
import { saveRandPhotos } from '../actions/randPhotos';

const Header = (props) => (
  <header>
    <h1 className="logo">LOGO :)</h1>
    {props && props.getData.title ?  
      <h2 className="title">{props.getData.title}</h2> : 
      <h1 className="username">Hi {props.getData.username}</h1>}
    <Link className="logout" to="/login" onClick={() => {
      props.dispatch(getTitle(''));
      props.dispatch(isLogged(false));
      props.dispatch(showAlbums(false));
      props.dispatch(saveRandPhotos(''));
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