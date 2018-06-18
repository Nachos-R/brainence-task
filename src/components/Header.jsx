import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTitle } from '../actions/get';
import { isLogged } from '../actions/login';
import { showAlbums } from '../actions/show';
import { saveRandPhotos } from '../actions/randPhotos';

const Header = (props) => (
  <header>
    {props && props.getData.title ?  
      <p className="title">{props.getData.title}</p> : 
      <p className="username">Hi, {props.getData.username}</p>}
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
    getData: state.getData
  }
}


export default connect(mapStateToProps)(Header);