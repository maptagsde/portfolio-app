import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export const Introduction = ({ id }) => {
  let Background = "/images/intro.jpg";
  return (
    <Container
      id={id}
      maxWidth="xl"
      style={{
        backgroundImage: `url(${Background})`,
        height: "100vh"
      }}
    >
      <Typography>This is my Introduction Page.</Typography>
    </Container>
  );
};

{
  /*
<Grid
      container
      id={id}
      maxWidth="xl"
      style={{
        height: "100vh"
      }}
    >
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Container
          maxWidth="xl"
          style={{
            height: "100vh",
            backgroundImage: `url(${Background})`,
            backgroundSize: "contain"
          }}
        >
          <Typography>This is my Introduction Page.</Typography>
        </Container>
      </Grid>
    </Grid>
*/
}
