import React from "react";
import Grid from "@mui/material/Grid";

import { ROUTES } from "src/constants/routes";
import SectionWrapper from "shared/SectionWrapper";
import Button from "shared/Button";
import Title from "shared/Title";
import TextSection from "shared/TextSection";
import useHomepageData from "queries/homepage";

import StatisticsItem from "./StatisticsItem";

const Stats = () => {
  const {
    statistics: {
      body: { body },
      title,
      header,
      images,
    },
  } = useHomepageData();
  return (
    <SectionWrapper
      style={{ containerStyle: { display: "flex", justifyContent: "center" } }}
      bgColor="secondary"
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item textAlign="center">
          <Title title={title} />
        </Grid>
        <Grid item width="100%">
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="stretch"
          >
            {images.map((stats, index) => (
              <Grid item sm={3} xs={12} key={stats.title}>
                <StatisticsItem {...stats} isPlusSign={index === 1} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          textAlign="center"
          style={{ marginTop: "calc(5.28vw + 21px)" }}
        >
          <TextSection body={body} header={header} />
        </Grid>
        <Button
          text="Learn about our impact"
          style={{ marginTop: "24px" }}
          route={ROUTES.OUR_IMPACT}
        />
      </Grid>
    </SectionWrapper>
  );
};
export default Stats;
