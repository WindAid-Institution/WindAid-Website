import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Title from "src/shared/Title/Title";
import Body from "src/shared/Body/Body";
import "styles/OurImpact/JoinProgram.css";
import "styles/OurPrograms/OurPrograms.css";

import OUR_IMPACT_DATA from "pages/our-impact/data";

const { JOIN_PROGRAM } = OUR_IMPACT_DATA;

const imageQuery = graphql`
  {
    joinProgram: file(relativePath: { eq: "OurImpact/join_program.png" }) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }
  }
`;

const JoinProgram = () => {
  const data = useStaticQuery(imageQuery);
  const imageData = getImage(data.joinProgram);

  return (
    <section className="join-program ">
      <div className="join-program__container container">
        <div className="join-program__content">
          <Title title={JOIN_PROGRAM.TITLE} style={{ color: "#fff" }} />
          <Body body={JOIN_PROGRAM.BODY} style={{ color: "#fff" }} />
          <Link to="/">
            <button
              type="button"
              // eslint-disable-next-line max-len
              className="join-program__button our-programs__button our-programs__button--reverse"
            >
              {JOIN_PROGRAM.BUTTON}
            </button>
          </Link>
        </div>

        <GatsbyImage
          image={imageData}
          alt="group of people"
          className="join-program__image our-programs__image"
        />
      </div>
    </section>
  );
};
export default JoinProgram;
