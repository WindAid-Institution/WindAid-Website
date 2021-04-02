/* This is the main index.js file which will eventually take the routes of the application
and render everything to the DOM */

import * as React from "react";

import { MainLayout } from "../../layout";
import PageBody from "../../components/WhoWeAre";

export default function WhoWeAre() {
  return (
    <MainLayout>
      <PageBody />
    </MainLayout>
  );
}
