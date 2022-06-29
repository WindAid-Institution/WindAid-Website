/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import Thumbnail from "../../static/mstile-150x150.png";

function Seo({ lang, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.title}
      meta={[
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          // You should ideally replace the hardcoded URL below with a value you set
          // in your gatsby-config.js file.  And import all shared site metadata into
          // this component with the useStaticQuery hook.
          content: `${Thumbnail}`,
        },
      ].concat(meta)}
    >
      <meta name="icon" href="/link/to/favicon.png" />

      <meta
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <meta
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <meta
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
    </Helmet>
  );
}

Seo.defaultProps = {
  lang: "en",
  meta: [],
};

Seo.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default Seo;
