import { graphql, useStaticQuery } from "gatsby";

const useLongTermData = () => {
  const data = useStaticQuery(graphql`
    {
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

      projectsCards: allContentfulCard(
        filter: { contentId: { eq: "longTerm-projects-card" } }
        sort: { fields: orderNumber }
        limit: 3
      ) {
        projectsCardsContent: nodes {
          name
          location
          date
          body {
            text: body
          }
          bodyTwo {
            text: bodyTwo
          }
          image {
            gatsbyImageData(quality: 100, placeholder: BLURRED)
            description
          }
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
    projectsCards: { projectsCardsContent },
  } = data;
  return {
    overview,
    offering,
    areas,
    exampleProjects,
    apply,
    hearFromPrev,
    projectsCardsContent,
  };
};

export default useLongTermData;
