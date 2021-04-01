import React from "react";
import {
  Container,
  createStyles,
  Grid,
  InputBase,
  makeStyles,
  Paper,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core";

import grey from "@material-ui/core/colors/grey";

export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: "100vh",
  },
  logo: {
    margin: "10px 0",
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: 230,
  },
  sideMenuListItem: {
    cursor: "pointer",
    "&:hover": {
      "& div": {
        backgroundColor: "rgba(29, 161, 242, 0.1)",
        "& h6": {
          color: theme.palette.primary.main,
        },
        "& svg path": {
          fill: theme.palette.primary.main,
        },
      },
    },

    "& div": {
      display: "inline-flex",
      alignItems: "center",
      position: "relative",
      padding: "0 25px 0 20px",
      borderRadius: 30,
      height: 50,
      marginBottom: 15,
      transition: "background-color 0.1s ease-in-out",
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 32,
    marginLeft: -5,
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(2),
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: "100%",
    borderTop: "0",
    borderBottom: "0",
  },
  tweetsHeader: {
    borderTop: "0",
    borderLeft: "0",
    borderRight: "0",
    borderRadius: 0,
    padding: "10px 15px",
    "& h6": {
      fontWeight: 800,
    },
  },
  tweet: {
    cursor: "pointer",
    paddingTop: 15,
    paddingLeft: 20,
    "&:hover": {
      backgroundColor: "rgb(245, 248, 250)",
    },
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  tweetFooter: {
    display: "flex",
    position: "relative",
    left: -13,
    justifyContent: "space-between",
    width: 450,
  },
  tweetUserName: {
    color: grey[500],
  },
}));

export const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: "#E6ECF0",
      height: 45,
      padding: 0,
    },
  })
)(InputBase);