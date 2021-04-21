import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import useGeneralProgramData from "queries/generalProgram";
import { splitQueriedList } from "src/utils/utils";

const useStyles = makeStyles((theme) => ({
  list: {
    paddingTop: theme.spacing(3),
    paddingLeft: "18px",
  },

  listItem: {
    padding: theme.spacing(1),

    [theme.breakpoints.up("md")]: {
      padding: "24px 24px 16px 16px",
    },
  },
}));

const Impact = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const subHeaderStyle = {
    subHeaderStyle: {
      textStyle: { paddingTop: theme.spacing(3) },
    },
  };

  const {
    impact: {
      title,
      subHeader,
      listItems: { listItems },
    },
  } = useGeneralProgramData();

  const dataList = splitQueriedList(listItems);
  return (
    <SectionWrapper bgColor="secondary">
      <TextSection
        title={title}
        subHeader={subHeader}
        size="lg"
        style={isUpMd ? subHeaderStyle : {}}
      />
      <Grid container component="ul" className={classes.list}>
        {dataList.map((data) => (
          <Grid
            className={classes.listItem}
            item
            component="li"
            md={6}
            sm={12}
            key={data}
          >
            <Typography>{data}</Typography>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default Impact;
