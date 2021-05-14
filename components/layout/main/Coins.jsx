import { useAppSelector } from '../../redux/setup/hooks';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
} from '@material-ui/core';
import { dateValidation, numberSeparator } from '../../utils/validator';
import LoadingScreen from '../navigation/LoadingScreen';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) =>
  createStyles({
    table: {
      width: '100%',
      backgroundColor: '#02151a',
    },

    headCell: {
      color: theme.palette.text.hint,
    },
    row: {
      '&:hover': {
        backgroundColor: 'black !important',
      },
      cursor: 'pointer',
    },
    link: {
      width: '100%',
    },
  })
);

export default function Coins() {
  const states = useAppSelector((state) => state.coinsList);
  const { coins, loading } = states;
  const classes = useStyles();
  const router = useRouter();
 

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {tableHead.map((head) => (
              <TableCell
                className={classes.headCell}
                key={head.key}
                align='center'
              >
                {head.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {loading === false ? (
            <>
              {coins.map((coin) => (
                <TableRow
                  onClick={() => router.push(`/${coin.id}`)}
                  className={classes.row}
                  hover
                  key={coin.id}
                >
                  <TableCell>
                    <img src={coin.image} height='24' width='24' />
                  </TableCell>
                  <TableCell align='center'>{coin.name}</TableCell>
                  <TableCell align='center'>{coin.symbol}</TableCell>
                  <TableCell align='center'>
                    {numberSeparator(coin.current_price)}
                  </TableCell>
                  <TableCell align='center'>{coin.market_cap_rank}</TableCell>
                  <TableCell align='center'>
                    {numberSeparator(coin.high_24h)}
                  </TableCell>
                  <TableCell align='center'>
                    {numberSeparator(coin.low_24h)}
                  </TableCell>
                  <TableCell align='center'>
                    {coin.price_change_percentage_24h}%
                  </TableCell>
                  <TableCell align='center'>
                    {numberSeparator(coin.circulating_supply)}
                  </TableCell>
                  <TableCell align='center'>
                    {dateValidation(coin.last_updated)}
                  </TableCell>
                </TableRow>
              ))}
            </>
          ) : (
            <LoadingScreen />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const tableHead = [
  { name: 'Icon', key: 0 },
  { name: 'Name', key: 1 },
  { name: 'Symbol', key: 2 },
  { name: 'Current($)', key: 3 },
  { name: 'Market Cap Rank', key: 4 },
  { name: 'Highest 24h($)', key: 5 },
  { name: 'Lowest 24h($)', key: 6 },
  { name: 'Price Change Percent 24h', key: 7 },
  { name: 'Circulating Supply', key: 8 },
  { name: 'Last Update', key: 9 },
];
