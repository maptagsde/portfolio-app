import React, { Component, Fragment } from "react";

import Scroll from "react-scroll";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const ScrollLink = Scroll.ScrollLink;

class Scroller extends Component {
  /*
  trackEvent(name) {
    console.log(name);
    window.analytics.track("buttonClick", {
      location: "Sidebar",
      label: name,
      category: "Menu",
      type: "Button"
    });
  }
*/
  render() {
    return (
      <Fragment>
        <ListItem
          key={this.props.to}
          button
          {...this.props}
          style={{ paddingTop: 0, paddingBottom: 0 }}
        >
          <ListItemText
            style={{
              textAlign: "center",
              textTransform: "uppercase"
            }}
          >
            {this.props.children}
          </ListItemText>
        </ListItem>
      </Fragment>
    );
  }
}

export default ScrollLink(Scroller);
