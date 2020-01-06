import React, { Fragment } from "react";
import { Element as Section, animateScroll as scroll } from "react-scroll";
import Scroller from "./Scroller";
//MUI
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

//Icons
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import RoomIcon from "@material-ui/icons/Room";
import { Container } from "@material-ui/core";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  }
}));

export const Sidebar = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item></Grid>
        <Grid item>
          <Avatar
            alt="Simon Appelt"
            src="./images/me.png"
            className={classes.large}
          />
        </Grid>
        <Grid item>
          <Typography variant="h4">Simon Appelt</Typography>
          <Grid container justify="center">
            <Grid item>
              <RoomIcon />
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Hamburg</Typography>
            </Grid>
          </Grid>
        </Grid>
        {/*E-Mail + Icon */}
        <Grid item>
          <Grid container>
            <Grid item>
              <EmailIcon />
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">me@simonappelt.de</Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Links + Section */}

        <div className={classes.root}>
          <List component="nav">
            <Scroller
              activeClass="active"
              to="introduction"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Introduction
            </Scroller>

            <Scroller
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About
            </Scroller>

            <Scroller
              to="timeline"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Timeline
            </Scroller>
          </List>
        </div>

        <Grid item>
          <Typography variant="body2">Some Text about me</Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};
