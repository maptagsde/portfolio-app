import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export const Introduction = ({ id }) => {
  let Background = "./images/intro.jpg";
  return (
    <Container
      id={id}
      maxWidth="xl"
      style={{
        //backgroundImage: `url(${Background})`,
        height: "100vh"
      }}
    >
      <Typography component="div">This is my Introduction Page.</Typography>
    </Container>
  );
};
