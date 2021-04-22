import { graphql, useStaticQuery } from "gatsby";

const useTrujilloData = () => {
  const data = useStaticQuery(graphql`
    {
      spring: contentfulSection(contentId: { eq: "trujillo-spring" }) {
        header
        title
        body {
          body
        }
        image {
          title
          description
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }

      explore: contentfulSection(contentId: { eq: "trujillo-explore" }) {
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

      beach: contentfulSection(contentId: { eq: "trujillo-beach" }) {
        title
        header
        body {
          body
        }
        images {
          title
          description
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }

      immerse: contentfulSection(contentId: { eq: "trujillo-immerse" }) {
        title
        body {
          body
        }
        image {
          title
          description
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }

      accommodation: contentfulSection(
        contentId: { eq: "trujillo-accommodation" }
      ) {
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

  const { spring, explore, beach, immerse, accommodation } = data;
  return {
    spring,
    explore,
    beach,
    immerse,
    accommodation,
  };
};

export default useTrujilloData;
