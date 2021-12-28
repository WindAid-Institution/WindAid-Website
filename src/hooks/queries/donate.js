import { graphql, useStaticQuery } from "gatsby";

const useDonateData = () => {
  const data = useStaticQuery(graphql`
    {
      donate: contentfulSection(contentId: { eq: "donate" }) {
        title
        body {
          body
        }
        images {
          title
          description
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }
    }
  `);

  const { donate } = data;
  return {
    donate,
  };
};

export default useDonateData;
