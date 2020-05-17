/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Authentication from '../Authentication/Authentication';
import History from '../History/History';
import Dashboard from '../Dashboard/Dashboard';
import Comparison from '../Comparison/Comparison';
import Stat from '../Stat/Stat';
import { setCredentials, setFailedCredentials } from '../../actions/auth';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { onSetCredentials, onSetFailedCredentials } = this.props;
    axios.get('https://track-my-activity.herokuapp.com/logged_in', { withCredentials: true })
      .then(response => {
        let data;
        if (response.data.logged_in) {
          data = {
            name: response.data.user.name,
            loggedIn: response.data.logged_in,
          };
        } else {
          data = {
            name: '',
            loggedIn: response.data.logged_in,
          };
        }
        onSetCredentials(data);
      })
      .catch(() => {
        onSetFailedCredentials();
      });
  }

  render() {
    const { loggedIn, userName } = this.props;
    return (
      <div className="App">
        {loggedIn
          ? (
            <>
              <Header name={userName} />
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/stat" exact component={Stat} />
                <Route path="/history" exact component={History} />
                <Route path="/comparison" exact component={Comparison} />
              </Switch>
              <Footer />
            </>
          )
          : <Route path="/" exact component={Authentication} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.user.loggedIn,
  userName: state.auth.user.name,
});

const mapDispatchToProps = dispatch => ({
  onSetCredentials: data => dispatch(setCredentials(data)),
  onSetFailedCredentials: () => dispatch(setFailedCredentials()),
});

App.propTypes = {
  onSetCredentials: PropTypes.func.isRequired,
  onSetFailedCredentials: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
