import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Dashboard from "./private/dashboard";
import NotFound from "./public/notfound";
import AppDashboard from "./private/app-dashboard";
import Workspace from "./private/workspace";
import Publish from "./public/publish";
import Login from "./public/login";
import decode from "jwt-decode";

const checkAuth = () => {
  const token = localStorage.getItem("access_token");
  if (!token) return false;
  try {
    const { exp } = decode(token);
    if (exp < new Date().getTime() / 1000) return false;
  } catch (e) {
    return false;
  }
  return true;
};

// Gets user authenticated status
// const checkAuth = (): boolean => {
//   return window.localStorage.getItem("loginToken") ? true : false;
// };

interface IComponent {
  component: React.FC<any>;
}

// Redirect route to login if authentication failed adn if true continue
const AuthRoute: React.FC<any> = ({
  component: Component,
  ...rest
}: IComponent) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )
    }
  />
);

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
        <Route path="/publish/:id" render={props => <Publish {...props} />} />

        {/* Private routes */}

        <AuthRoute path="/workspace" component={Workspace} />

        <Route
          exact
          path="/create/:id/"
          render={props => (
            <Redirect
              to={{ pathname: `/create/${props.match.params.id}/form` }}
            />
          )}
        />
        <AuthRoute path="/create/:id/:page" component={Dashboard} />
        <Route
          path="/create/:id/:page"
          render={props => <Dashboard {...props} />}
        />
        <Route
          path="/login"
          render={props =>
            !checkAuth() ? (
              <Login {...props} />
            ) : (
              <Redirect to={{ pathname: "/" }} />
            )
          }
        />
        <Route path="*" render={() => <NotFound />} />
      </Switch>
    </>
  );
};

export default Routes;
