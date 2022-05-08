import { Route, Routes } from "react-router-dom";

export function PrivateRouteAdmin({ children, isAuthenticated, ...rest }) {
  return (
    <Routes
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Route
            to={{
              pathname: "/adminPage",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export function PrivateRouteStat({ children, isAuthenticated, ...rest }) {
  return (
    <Routes
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Route
            to={{
              pathname: "/Statistics",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export function PrivateRouteUSers({ children, isAuthenticated, ...rest }) {
  return (
    <Routes
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Route
            to={{
              pathname: "/Users",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
