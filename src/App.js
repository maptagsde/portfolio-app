import React from "react";
import "./App.css";
import { Fragment } from "react";
import { Sidebar } from "./components/Sidebar";
import { Introduction } from "./components/Introduction";

import { About } from "./components/About";
import { History } from "./components/History";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";

import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  }
}));

function App(props) {
  const { container } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Typography>Portfolio-App</Typography>
        <Typography>v1.0.0</Typography>
      </div>
      <Divider />
      <Sidebar />
    </div>
  );

  return (
    <Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>

            <Grid justify="space-between" container spacing={10}>
              <Grid item></Grid>
              <Grid item>
                <Tooltip title="Twitter">
                  <IconButton
                    aria-label="twitter"
                    href="https://www.twitter.com/maptagsde"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Github">
                  <IconButton
                    aria-label="github"
                    href="https://www.twitter.com/maptagsde"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <IconButton
                    aria-label="linkedin"
                    href="https://www.twitter.com/maptagsde"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Introduction id="introduction" />
          <About id="about" />
          <History id="timeline" />
        </main>
      </div>
    </Fragment>
  );
}

export default App;
