import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import useOurImpactData from "queries/ourImpact";
import Title from "shared/Title";
import Body from "shared/Body";
import "styles/OurImpact/JoinProgram.css";
import "styles/OurPrograms/OurPrograms.css";

const JoinProgram = () => {
  const {
    joinOurProgram: {
      title,
      body: { body },
      image,
    },
  } = useOurImpactData();

  return (
    <section className="join-program ">
      <div className="join-program__container container">
        <div className="join-program__content">
          <Title title={title} style={{ color: "#fff" }} />
          <Body body={body} style={{ color: "#fff" }} />
          <Link to="/">
            <button
              type="button"
              // eslint-disable-next-line max-len
              className="join-program__button our-programs__button our-programs__button--reverse"
            >
              View Our Programs
            </button>
          </Link>
        </div>

        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.description}
          className="join-program__image our-programs__image"
        />
      </div>
    </section>
  );
};
export default JoinProgram;
