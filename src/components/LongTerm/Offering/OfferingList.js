import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Header from "shared/Header";
import useLongTermData from "queries/longTerm";
import { splitQueriedList } from "src/utils/utils";

const useStyles = makeStyles((theme) => ({
  list: {
    paddingLeft: theme.spacing(3),
    fontFamily: theme.typography.fontFamily,
  },
}));

const OfferingList = () => {
  const {
    areas: {
      header,
      listItems: { listItems },
    },
  } = useLongTermData();

  const classes = useStyles();
  const theme = useTheme();

  const areasList = splitQueriedList(listItems);
  return (
    <>
      <Header
        header={header}
        size="sm"
        style={{ textStyle: { color: theme.palette.primary.main } }}
      />

      <ul className={classes.list}>
        {areasList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};
export default OfferingList;
