import React from "react";

import { useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import useGeneralProgramData from "queries/generalProgram";
import { splitQueriedList } from "src/utils/utils";

const Impact = () => {
  const theme = useTheme();

  const {
    impact: {
      title,
      subHeader,
      listItems: { listItems },
    },
  } = useGeneralProgramData();

  const dataList = splitQueriedList(listItems);
  return (
    <SectionWrapper>
      <TextSection title={title} subHeader={subHeader} size="lg" />
      <Grid
        container
        component="ul"
        spacing={theme.breakpoints.up("md") ? 6 : false}
      >
        {dataList.bodyList.map((data) => (
          <Grid item component="li" md={6} sm={12} key={data}>
            {data}
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default Impact;
