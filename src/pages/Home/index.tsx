import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";

import { Tweet, SideMenu } from "../../components";
import { useHomeStyles, SearchTextField } from "../Home/styles";

const Home = () => {
  const classes = useHomeStyles();

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
            {[
              ...new Array(20).fill(
                <Tweet
                  text="Петиция чтобы в каждой пачке сухариков всегда лежал один большой в три слоя обсыпанный химическими специями царь-сухарик."
                  user={{
                    fullname: "Glafira Zhur",
                    username: "GlafiraZhur",
                    avatarUrl:
                      "https://images.unsplash.com/photo-1528914457842-1af67b57139d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                  }}
                  classes={classes}
                />
              ),
            ]}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField placeholder="Поиск по Твиттеру" fullWidth />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home
