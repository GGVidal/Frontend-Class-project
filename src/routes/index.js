import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddClass from "../pages/AddClass";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/addClass" component={AddClass} />
    </Switch>
  );
};

export default Routes;
