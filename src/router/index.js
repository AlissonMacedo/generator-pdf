import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Certificate from "../Pages/Certificate";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/certificate" component={Certificate} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
