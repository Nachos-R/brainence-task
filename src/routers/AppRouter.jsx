import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import Album from '../components/Album';
import Photo from '../components/Photo';

const AppRouter = (props) => (
  <BrowserRouter>
    <div>
    {
      props.login.loggedIn ? (
        <div>
          <Header />
          <Menu />
        </div>
      ) : <Redirect exact from="/" to="/login" />}
      
      <Switch>
        <Route path="/login" component={LoginPage} />        
        <Route path="/gallery/:id" component={Gallery} />
        <Route path="/album/:id" component={Album} />
        <Route path="/photo/:id" component={Photo} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps)(AppRouter);
