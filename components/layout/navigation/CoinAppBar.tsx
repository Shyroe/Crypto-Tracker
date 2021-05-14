import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

export default function CoinAppBar(props) {
  const classes = useStyles();
  const router = useRouter();
  const title = props.title

  const handleNavChange = () => {
    router.back();
  };

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar variant='dense'>
          <IconButton
            edge='start'
            onClick={handleNavChange}
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography className={classes.root} variant='h6' color='inherit'>
            {title.toUpperCase()}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
