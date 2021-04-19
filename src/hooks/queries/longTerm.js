import { graphql, useStaticQuery } from "gatsby";

const useLongTermData = () => {
  const data = useStaticQuery(graphql`
    {
      overview: contentfulSection(contentId: { eq: "longTerm-overview" }) {
        header
        title
        body {
          body
        }
      }

      offering: contentfulSection(contentId: { eq: "longTerm-offering" }) {
        title: header
        body {
          body
        }
        bodyTwo {
          bodyTwo
        }
        images {
          title
          description
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }

      areas: contentfulSection(contentId: { eq: "longTerm-areas" }) {
        header
        listItems {
          listItems
        }
      }

      exampleProjects: contentfulSection(
        contentId: { eq: "longTerm-example-projects" }
      ) {
        title: header
        body {
          body
        }
      }

      apply: contentfulSection(contentId: { eq: "longTerm-apply" }) {
        title: header
        body {
          body
        }

        bodyTwo {
          bodyTwo
        }
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
    offering,
    areas,
    exampleProjects,
    apply,
    hearFromPrev,
    volunteersCards: { volunteersCardsContent },
  } = data;
  return {
    overview,
    offering,
    areas,
    exampleProjects,
    apply,
    hearFromPrev,
    volunteersCardsContent,
  };
};

export default useLongTermData;
