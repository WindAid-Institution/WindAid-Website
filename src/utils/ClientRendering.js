import React from "react";

import App from "../pages/index";

// eslint-disable-next-line react/prop-types
function ClientSideRendering({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = React.useState(false);

  const WebFontConfig = {
    google: {
      families: ["Open Sans"],
    },
    classes: false,
    timeout: 1000,
    active: App, // invoked when fonts are active
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
