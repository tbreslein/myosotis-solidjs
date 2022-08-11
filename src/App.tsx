import Card from "@suid/material/Card";
import CardContent from "@suid/material/CardContent";
import Typography from "@suid/material/Typography";
import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <>
      <h1>hello solidjs!!!</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Do the dishes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I should really do the dishes.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default App;
