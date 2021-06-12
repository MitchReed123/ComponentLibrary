import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import Cards from "./Cards";
import Dashboard from "./Dashboard";

const ComponentHome = () => {
  return (
    <div style={{ height: "100%", maxHeight: "100vh" }}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/cards" component={Cards} />
      </Switch>
    </div>
  );
};

export default ComponentHome;
