const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query AllProjects {
      allProjects: allContentfulProjectInfo {
        nodes {
          slug
          projectName
          location
          mainImage {
            gatsbyImageData(
              layout: CONSTRAINED
              quality: 100
              formats: JPG
              placeholder: BLURRED
            )
          }
          dateStarted
          status
          aboutTheCommunity {
            aboutTheCommunity
          }
          howDidWeGetInvolved {
            howDidWeGetInvolved
          }
          goalOfTheProject {
            goalOfTheProject
          }
          secondaryImage {
            gatsbyImageData(
              layout: CONSTRAINED
              quality: 100
              formats: JPG
              placeholder: BLURRED
            )
          }
          caseStudy {
            caseStudy
          }
          impact {
            impact
          }
        }
      }
    }
  `);
  const projectTemplate = path.resolve(
    "src/components/Projects/ProjectInfoTemplate.js"
  );
  queryResults.data.allProjects.nodes.forEach((node) => {
    createPage({
      path: `/projects/${node.slug}`,
      component: projectTemplate,
      context: {
        // This time the entire product is passed down as context
        project: node,
      },
    });
  });
};
