import { Route, Switch, Redirect } from "react-router";
import loadable from '@loadable/component'
import MyNav from '../components/Navigation';
import NotFoundSection from "../sections/NotFoundSection";
import React from "react";
import { loadableParams } from "../components/MyLoadable";

function PrivateRoute({ 
  comp: PrivateComponent,
  children, ...rest }) {  
  const { loggedIn } = useAuthStore();

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? (
          <PrivateComponent {...props}/>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default function SectionsWrapper(){
  const myMapper = (routeItem, sectionIndex) => {
    let route;

    // if(routeItem.scope.includes("loggedIn"))
    //   route = <PrivateRoute key={sectionIndex} path={routeItem.url} exact
    //     comp={routeItem.section} />
    // else
      route = <Route key={sectionIndex} path={routeItem.url} exact
        component={routeItem.section} />

    return route;
  };

  let sections = MyNav.map(myMapper);

  return (
    <Switch>
      {sections}

      {/* <PrivateRoute path="/autoinvoice/edit/:hash" comp={loadable(() => import("../sections/AutoInvoiceEditSection"), loadableParams)} />
      <PrivateRoute path="/autoinvoice/new" comp={loadable(() => import("../sections/AutoInvoiceEditSection"), loadableParams)} /> */}
      <Route>
        <NotFoundSection />
      </Route>
    </Switch>
  )
}