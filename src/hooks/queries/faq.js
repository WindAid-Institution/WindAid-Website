import { graphql, useStaticQuery } from "gatsby";

const useFaqData = () => {
  const data = useStaticQuery(graphql`
    {
      find: contentfulSection(contentId: { eq: "faq-find" }) {
        title
      }

      questionsAnswers: allContentfulFaqQuestionAnswer(
        sort: { fields: orderNumber }
      ) {
        questionsAnswersContent: nodes {
          question
          answer {
            answer
          }
          orderNumber
        }
      }
    }
  `);

  const {
    find,
    questionsAnswers: { questionsAnswersContent },
  } = data;
  return {
    find,
    questionsAnswersContent,
  };
};

export default useFaqData;
