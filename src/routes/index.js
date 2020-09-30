import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddUser from "../pages/AddUser";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/addUser" component={AddUser} />
    </Switch>
  );
};

export default Routes;
