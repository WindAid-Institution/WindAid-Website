import React from "react";

import ClientSideRendering from "../utils/ClientRendering";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <ClientSideRendering>
      <NavBar />
      {children}
      <Footer />
    </ClientSideRendering>
  );
}
