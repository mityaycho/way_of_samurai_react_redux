import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

import { BrowserRouter, Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import { withSuspense } from "./hoc/withSuspense";


const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));


class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  };

  render() {
    if (!this.props.initialized) return <Preloader/>
    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <NavBar/>
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/profile" />} />
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
            <Route path="/users" render={() => <UsersContainer/>}/>
            <Route path="/login" render={() => <LoginPage/>}/>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({initialized: state.app.initialized});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

const AppWithBrowserRouter = (props) => {
  return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	);
};

export default AppWithBrowserRouter;