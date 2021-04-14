import React from "react";
import useOurImpactData from "src/hooks/queries/ourImpact";
import { BASIC_SOCIAL_LINKS } from "src/constants/footer";
import Title from "src/shared/Title/Title";
import Body from "src/shared/Body/Body";

import "styles/OurImpact/SpreadTheWord.css";

const SpreadTheWord = () => {
  const {
    spreadTheWord: {
      title,
      body: { body },
      bodyTwo: { bodyTwo },
    },
  } = useOurImpactData();

  return (
    <section className="spread-the-word">
      <div className="spread-the-word__container container">
        <div className="spread-the-word__text-content">
          <Title title={title} />
          <Body body={body} />
          <Body body={bodyTwo} />
        </div>

        <div className="spread-the-word__links-content">
          {BASIC_SOCIAL_LINKS.map(({ name, accName, icon, link }) => (
            <a key={name} href={link}>
              <div className="spread-the-word__link">
                <span className="spread-the-word__icon">{icon}</span>{" "}
                <span className="spread-the-word__icon-text">{accName}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpreadTheWord;
