import { graphql, useStaticQuery } from "gatsby";

const useOurImpactData = () => {
  const data = useStaticQuery(graphql`
    {
      theProblem: contentfulSection(
        contentId: { eq: "ourImpact-the-problem" }
      ) {
        header
        title
        body {
          body
        }
      }

      whoWereServing: contentfulSection(
        contentId: { eq: "ourImpact-who-were-serving" }
      ) {
        header
        title
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

      community: contentfulSection(contentId: { eq: "ourImpact-community" }) {
        title: header
      }
      communityCards: allContentfulCard(
        filter: { contentId: { eq: "ourImpact-community-card" } }
        sort: { fields: orderNumber }
      ) {
        communityCardsContent: nodes {
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

      joinOurProgram: contentfulSection(
        contentId: { eq: "ourImpact-join-our-program" }
      ) {
        title: header
        body {
          body
        }
        image {
          description
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }

      partnerWithUs: contentfulSection(
        contentId: { eq: "ourImpact-partner-with-us" }
      ) {
        title: header
        body {
          body
        }
        image {
          description
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }

      spreadTheWord: contentfulSection(
        contentId: { eq: "ourImpact-spread-the-word" }
      ) {
        title: header
        body {
          body
        }
        bodyTwo {
          bodyTwo
        }
      }
    }
  `);

  const {
    theProblem,
    whoWereServing,
    community,
    communityCards: { communityCardsContent },
    joinOurProgram,
    partnerWithUs,
    spreadTheWord,
  } = data;
  return {
    theProblem,
    whoWereServing,
    community,
    communityCardsContent,
    joinOurProgram,
    partnerWithUs,
    spreadTheWord,
  };
};

export default useOurImpactData;
