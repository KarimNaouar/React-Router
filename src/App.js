import React from "react";
import { Link, Route, Redirect, Switch } from "react-router-dom";
import Category from "./Category";
import Products from "./Products";
import Admin from "./Admin";
import Home from "./Home";
import Login, { fakeAuth } from "./Login";

const App = () => {
  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          fakeAuth.isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );
  };
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/admin">Admin area</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />
        <Route path="/login" component={Login} />
        <PrivateRoute
          authed={fakeAuth.isAuthenticated}
          path="/admin"
          component={Admin}
        />
      </Switch>
    </div>
  );
};

export default App;
