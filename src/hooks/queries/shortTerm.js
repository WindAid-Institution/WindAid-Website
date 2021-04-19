import { graphql, useStaticQuery } from "gatsby";

const useShortTermData = () => {
  const data = useStaticQuery(graphql`
    {
      overview: contentfulSection(contentId: { eq: "shortTerm-overview" }) {
        header
        title
        body {
          body
        }
      }

      day1to3: contentfulSection(contentId: { eq: "shortTerm-day-1-3" }) {
        header
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

      day4to20: contentfulSection(contentId: { eq: "shortTerm-day-4-20" }) {
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

      day21to27: contentfulSection(contentId: { eq: "shortTerm-day-21-27" }) {
        header
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

      volunteers: contentfulSection(contentId: { eq: "shortTerm-volunteers" }) {
        header
        body {
          body
        }
      }

      hearFromPrev: contentfulSection(
        contentId: { eq: "shortTerm-hear-from-previous" }
      ) {
        header
      }

      volunteersCards: allContentfulCard(
        filter: { contentId: { eq: "shortTerm-volunteers-card" } }
        sort: { fields: orderNumber }
        limit: 3
      ) {
        volunteersCardsContent: nodes {
          name
          location
          date
          body {
            text: body
          }
          image {
            gatsbyImageData(quality: 100, placeholder: BLURRED)
          }
          additionalText
        }
      }
    }
  `);

  const {
    overview,
    day1to3,
    day4to20,
    day21to27,
    volunteers,
    hearFromPrev,
    volunteersCards: { volunteersCardsContent },
  } = data;
  return {
    overview,
    day1to3,
    day4to20,
    day21to27,
    volunteers,
    hearFromPrev,
    volunteersCardsContent,
  };
};

export default useShortTermData;
