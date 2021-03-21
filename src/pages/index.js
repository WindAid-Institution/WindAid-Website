/* This is the main index.js file which will eventually take the routes of the application
and render everything to the DOM */

import * as React from "react";

import { Switch, Route, BrowserRouter} from "react-router-dom";
import { MainLayout } from "../layout";
import Home from "../components/Home";
import WhoWeAre from "../components/WhoWeAre";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/who-we-are" component={WhoWeAre} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}
