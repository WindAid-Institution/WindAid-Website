import React from "react";
import { BASIC_SOCIAL_LINKS } from "src/constants/footer";
import OUR_IMPACT_DATA from "pages/our-impact/data";
import Title from "src/shared/Title/Title";
import Body from "src/shared/Body/Body";

import "styles/OurImpact/SpreadTheWord.css";

const { SPREAD_THE_WORD } = OUR_IMPACT_DATA;

const SpreadTheWord = () => (
  <section className="spread-the-word">
    <div className="spread-the-word__container container">
      <div className="spread-the-word__text-content">
        <Title title={SPREAD_THE_WORD.TITLE} />
        <Body body={SPREAD_THE_WORD.BODY_ONE} />
        <Body body={SPREAD_THE_WORD.BODY_TWO} />
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

export default SpreadTheWord;
