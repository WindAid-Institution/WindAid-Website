/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { Helmet } from "react-helmet";
import { getSrc } from "gatsby-plugin-image";
import useSeoData from "../hooks/queries/seo";

const Seo = () => {
  const {
    seoProperties: { title, description, keywords, image },
  } = useSeoData();
  const img = getSrc(image);
  return (
    <Helmet>
      <html lang="en" amp />
      <title itemProp="name" lang="en">
        {title}
      </title>
      <meta name="description" content={description.description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://windaid.org" />
      <meta name="og:description" content={description.description} />
      <meta name="og:type" content="website" />
      <meta property="og:image:url" content={img} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:keywords" content={keywords} />
    </Helmet>
  );
};

export default Seo;
