import React, { Fragment } from "react";
import { Link as Section, animateScroll as scroll } from "react-scroll";

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

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  }
}));

export const Sidebar = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Container style={{ backgroundColor: "#cfe8fc", height: "100vh" }}>
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
              alt="Fake Person"
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
          <Grid item>
            <Grid
              container
              spacing={0}
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="button">
                  <Section
                    activeClass="active"
                    to="introduction"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Introduction
                  </Section>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="button">
                  <Section
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    About
                  </Section>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="button">
                  <Section
                    to="timeline"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Timeline
                  </Section>
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Social */}
          <Grid item>
            <Grid
              container
              spacing={2}
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Link
                  href="https://www.twitter.com/maptagsde"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="https://github.com/maptagsde"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="https://de.linkedin.com/in/maptagsde"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body2">Some Text about me</Typography>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};
