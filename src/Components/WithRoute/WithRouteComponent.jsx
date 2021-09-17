import React from "react";
import { Route } from "react-router-dom";

export const WithRoute = ({path, Component}) => {
  return (
    <Route path={path}>
      <Component/>
    </Route>
  );
}