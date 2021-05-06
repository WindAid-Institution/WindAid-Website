import { graphql, useStaticQuery } from "gatsby";

const useAmbassadorsData = () => {
  const data = useStaticQuery(graphql`
    {
      ambassadors: contentfulSection(
        contentId: { eq: "ambassadors-ourAmbassadors" }
      ) {
        title
        body {
          body
        }
      }

      meet: contentfulSection(contentId: { eq: "ambassadors-meet" }) {
        title
      }

      ambassadorsCards: allContentfulCard(
        filter: { contentId: { eq: "ambassadors-card" } }
        sort: { fields: orderNumber }
      ) {
        ambassadorsCardsContent: nodes {
          name
          location
          date
          email
          image {
            gatsbyImageData(quality: 100, placeholder: BLURRED)
            description
          }
          orderNumber
        }
      }
    }
  `);

  const {
    ambassadors,
    meet,
    ambassadorsCards: { ambassadorsCardsContent },
  } = data;
  return {
    ambassadors,
    meet,
    ambassadorsCardsContent,
  };
};

export default useAmbassadorsData;
