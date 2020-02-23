import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Dashboard from "./private/dashboard";
import NotFound from "./public/notfound";
import AppDashboard from "./private/app-dashboard";
import Workspace from "./private/workspace";
import Publish from "./public/publish";

// Gets user authenticated status
// const checkAuth = (): boolean => {
//   return window.localStorage.getItem("loginToken") ? true : false;
// };

interface IComponent {
  component: React.FC<any>;
}

// Redirect route to login if authentication failed adn if true continue
// const AuthRoute: React.FC<any> = ({
//   component: Component,
//   ...rest
// }: IComponent) => (
//   <Route
//     {...rest}
//     render={props =>
//       checkAuth() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/login" }} />
//       )
//     }
//   />
// );

// Manually Redirect route after authentication
// const AuthRouteRedirect: React.FC<any> = ({
//   to,
//   component: Component,
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     render={props =>
//       checkAuth() ? <Redirect to={{ pathname: to }} /> : <Component {...props} />
//     }
//   />
// );

const Routes: React.FC = () => {
  return (
    <>
        {/* {checkAuth() && <Navbar />} */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to={{ pathname: "/workspace" }} />}
          />
          <Route
            exact
            path="/app/:id"
            render={props => <AppDashboard {...props} />}
          />
          <Route
            path="/publish/:id"
            render={props => <Publish {...props} />}
          />
          {/* <AuthRoute path="/artists" component={Artists} /> */}
          {/* <AuthRouteRedirect to="/" path="/login" component={Login} /> */}

          {/* Private routes */}
          <Route path="/workspace" render={props => <Workspace {...props} />} />
          <Route
          exact
            path="/create/:id/"
            render={props =><Redirect to={{ pathname: `/create/${props.match.params.id}/form` }} />}
          />
          <Route
            path="/create/:id/:page"
            render={props => <Dashboard {...props} />}
          />
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      {/* <Switch>
        <AuthRouteRedirect to="/" path="/login" component={Login} />
      </Switch> */}
    </>
  );
};

export default Routes;
