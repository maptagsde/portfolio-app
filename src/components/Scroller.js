import React, { Component, Fragment } from "react";

import Scroll from "react-scroll";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const ScrollLink = Scroll.ScrollLink;

class Scroller extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <ListItem button {...this.props}>
          <ListItemText
            style={{ textAlign: "center", textTransform: "uppercase" }}
          >
            {this.props.children}
          </ListItemText>
        </ListItem>
      </Fragment>
    );
  }
}

export default ScrollLink(Scroller);
