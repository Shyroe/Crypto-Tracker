import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CircularProgress, Backdrop } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  })
);

export default function LoadingScreen() {
  const classes = useStyles();
  return (
    <>
      <Backdrop className={classes.backdrop} open>
        <CircularProgress color='inherit' />
      </Backdrop>
    </>
   
  );
}
