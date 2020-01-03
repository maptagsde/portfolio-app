import React from "react";
import "./App.css";
import { Fragment } from "react";
import { Sidebar } from "./components/Sidebar";
import { Introduction } from "./components/Introduction";

import Grid from "@material-ui/core/Grid";
import { About } from "./components/About";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <Fragment>
      <div id="nav">
        <Sidebar />
      </div>

      <div id="content">
        <Introduction id="introduction" />
        <About id="about" />
        <Timeline id="timeline" />
      </div>
    </Fragment>
  );
}

export default App;
