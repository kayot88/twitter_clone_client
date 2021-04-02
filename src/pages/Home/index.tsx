import React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Divider from "@material-ui/core/Divider/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import List from "@material-ui/core/List/List";
import Button from "@material-ui/core/Button/Button";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import CircularProgress from "@material-ui/core/CircularProgress";


import { Tweet, SideMenu, AddTweetForm } from "../../components";
import { SearchTextField } from "../Home/styles";
import { useHomeStyles } from "../Home/theme";

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
            <Paper>
              <div className={classes.addForm}>
                <AddTweetForm classes={classes} />
              </div>
              <div className={classes.addFormBottomLine} />
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
          <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant="outlined">
              <b>Актуальные темы</b>
            </Paper>
            <List>
              <ListItem className={classes.rightSideBlockItem}>
                <ListItemText
                  primary="Санкт-Петербург"
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      color="textSecondary"
                    >
                      Твитов: 3 331
                    </Typography>
                  }
                />
              </ListItem>
              <Divider component="li" />
              <ListItem className={classes.rightSideBlockItem}>
                <ListItemText
                  primary="#коронавирус"
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      color="textSecondary"
                    >
                      Твитов: 163 122
                    </Typography>
                  }
                />
              </ListItem>
              <Divider component="li" />
              <ListItem className={classes.rightSideBlockItem}>
                <ListItemText
                  primary="Беларусь"
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      color="textSecondary"
                    >
                      Твитов: 13 554
                    </Typography>
                  }
                />
              </ListItem>
              <Divider component="li" />
            </List>
          </Paper>
          <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant="outlined">
              <b>Кого читать</b>
            </Paper>
            <List>
              <ListItem className={classes.rightSideBlockItem}>
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Dock Of Shame"
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      color="textSecondary"
                    >
                      @FavDockOfShame
                    </Typography>
                  }
                />
                <Button color="primary">
                  <PersonAddIcon />
                </Button>
              </ListItem>
              <Divider component="li" />
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home
