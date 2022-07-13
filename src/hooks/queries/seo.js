import { graphql, useStaticQuery } from "gatsby";

const useSeoData = () => {
  const data = useStaticQuery(graphql`
    {
      seoProperties: contentfulSeo(title: { eq: "WindAid Institute" }) {
        title
        description {
          description
        }
        keywords
        image {
          gatsbyImageData(
            placeholder: BLURRED
            layout: CONSTRAINED
            height: 512
            width: 512
            quality: 100
            formats: PNG
          )
        }
      }
    }
  `);

  const { seoProperties } = data;
  return {
    seoProperties,
  };
};

export default useSeoData;
