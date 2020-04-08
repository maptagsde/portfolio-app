import React, { Fragment, useState } from "react";
import Scroller from "./Scroller";
//MUI
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

//Icons
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";

import ReactCardFlip from "react-card-flip";
import IconButton from "@material-ui/core/IconButton";

import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

import InstagramIcon from "@material-ui/icons/Instagram";

import YouTubeIcon from "@material-ui/icons/YouTube";

import Icon from "@mdi/react";
import { mdiXing } from "@mdi/js";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360
    //backgroundColor: theme.palette.background.paper
  },
  front: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  },
  back: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    transform: [
      {
        rotateY: "180deg"
      }
    ]
  }
}));
/*
function trackEvent(name) {
  //console.log(name);
  window.analytics.track("buttonClick", {
    location: "Sidebar",
    label: name,
    category: "Menu",
    type: "Button"
  });
}
*/
export const Sidebar = () => {
  const classes = useStyles();

  const [flip, setFlipped] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setFlipped(flip => !flip);
  }

  return (
    <Fragment>
      <Grid
        container
        spacing={4}
        direction="column"
        justify="center"
        alignItems="center"
        style={{
          margin: 0,
          width: "100%"
        }}
      >
        <Grid
          item
          style={{
            paddingBottom: 1
          }}
        >
          <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <Avatar
              alt="Simon Appelt"
              src="./images/me.png"
              className={classes.front}
              onClick={handleClick}
            />
            <Avatar
              alt="MAPTAGSDE"
              src="./images/logo.png"
              className={classes.front}
              onClick={handleClick}
            />
          </ReactCardFlip>
        </Grid>
        <Grid
          item
          style={{
            paddingTop: 3
          }}
        >
          <Grid justify="space-between" container>
            <Grid item>
              <IconButton
                aria-label="twitter"
                href="https://www.twitter.com/maptagsde"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="github"
                href="https://www.twitter.com/maptagsde"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                aria-label="xing"
                href="https://www.xing.com/profile/Simon_Appelt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon path={mdiXing} title="Xing" size={1} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            paddingTop: 3,
            paddingBottom: 0
          }}
        >
          <Typography style={{ fontFamily: "Playfair Display" }} variant="h4">
            Simon Appelt
          </Typography>
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
        <Grid
          item
          style={{
            paddingTop: 0
          }}
        >
          <Grid container>
            <Grid item>
              <EmailIcon />
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" style={{ paddingLeft: "4px" }}>
                me@simonappelt.de
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Links + Section */}
        <div className={classes.root}>
          <List component="nav">
            <Scroller
              to="introduction"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              //onClick={e => trackEvent("Introduction")}
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
              //onClick={e => trackEvent("About")}
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
              //onClick={e => trackEvent("Timeline")}
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
