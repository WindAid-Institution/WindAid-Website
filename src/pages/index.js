/* This is default route - home page*/


import * as React from "react";

import { MainLayout } from "../layout";
import Home from "../components/Home";
import "../styles/global.css"

export default function App() {
  return (
    <MainLayout>
      <Home/>
    </MainLayout>
  );
}
