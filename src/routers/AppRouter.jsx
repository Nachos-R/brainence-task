import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import LeftPanel from '../components/LeftPanel';
import Gallery from '../components/Gallery';
import Photos from '../components/Photos';

const AppRouter = (props) => (
  <BrowserRouter>
    <React.Fragment>
      {
        props.login.loggedIn ? (
          <React.Fragment>
            <LeftPanel />
            <Header />
          </React.Fragment>
        ) : <Redirect exact from="/" to="/login" />
      }
      
      <Switch>
        <Route path="/login" component={LoginPage} />        
        <Route path="/gallery/:id" component={Gallery} />
        <Route path="/album/:id" component={Photos} />
        <Route path="/photo/:id" component={Gallery} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps)(AppRouter);
