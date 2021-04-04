import { Container, Grid, Paper, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Button from "@material-ui/core/Button/Button";
import Divider from "@material-ui/core/Divider/Divider";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import {
  AddTweetForm,
  SearchTextField,
  SideMenu,
  Tweet,
} from "../../components";
import { useHomeStyles } from "../Home/styles";
import { FethcTweets } from "../../ducks/tweets";
import { RootState } from "ducks/store";
// import Tweet from './../../components/Tweet/index';

const Home = (): React.ReactElement => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const { items, loadingStatus } = useSelector(
    (state: RootState) => state.items
  );
  console.log(items);
  useEffect(() => {
    dispatch(FethcTweets());
  }, [FethcTweets]);

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

            {loadingStatus === "LOADING" ? (
              <ClipLoader />
            ) : (
              items.map((item: any) => (
                <Tweet
                  key={item._id}
                  text={item.text}
                  user={item.user}
                  classes={classes}
                />
              ))
            )}
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

export default Home;
