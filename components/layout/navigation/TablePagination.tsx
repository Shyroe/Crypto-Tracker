import { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useAppDispatch } from '../../redux/setup/hooks';
import { listCoins } from '../../redux/actions/coinsActions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  })
);

export default function TablePagination() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(listCoins(page) as any);
  }, [dispatch, page]);

  return (
    <div className={classes.root}>
      <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        variant='outlined'
        color='primary'
        hideNextButton
        hidePrevButton
      />
    </div>
  );
}
