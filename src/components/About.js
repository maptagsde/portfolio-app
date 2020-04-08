import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export const About = ({ id }) => {
  return (
    <Container
      id={id}
      style={{ backgroundColor: "red", height: "100vh" }}
      maxWidth="xl"
    >
      <Typography component="div">This is my Introduction Page.</Typography>
      <h1 className="fadeInLeft animated">Example</h1>
    </Container>
  );
};
