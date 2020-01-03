import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export const Timeline = ({ id }) => {
  return (
    <Container
      id={id}
      maxWidth="xl"
      style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
    >
      <Typography component="div">This is my Timeline.</Typography>
    </Container>
  );
};
