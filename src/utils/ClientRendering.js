import React from "react";

import Home from "../components/Home/index";

function ClientSideRendering({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = React.useState(false);

  const WebFontConfig = {
    google: {
      families: ["Open Sans"],
    },
    classes: false,
    timeout: 1000,
    active: Home, // invoked when fonts are active
  };

  if (typeof window !== "undefined") {
    import("webfontloader").then((WebFontLoader) => {
      WebFontLoader.load(WebFontConfig);
    });
  }

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}

export default ClientSideRendering;
