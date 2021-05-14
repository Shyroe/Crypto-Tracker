import LoadingScreen from '../navigation/LoadingScreen';
import { useAppSelector } from '../../redux/setup/hooks';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Paper,
  Link,
  Container,
  Typography,
  Grid,
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
} from '@material-ui/core';
import text from '../../../language/text.json';
import InfoIcon from '@material-ui/icons/Info';
import ScoreIcon from '@material-ui/icons/Score';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(10),
    },
    avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
    card: {
      backgroundColor: '#120e0e',
      width: 400,
    },
    cardCont: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    paper: {
      backgroundColor: '#000',
      padding: theme.spacing(2),
    },
    paperSkeleton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    },
  })
);


export default function Coin() {
  const states = useAppSelector((state) => state.singleCoin);
  const { coin, loading } = states;
  const classes = useStyles();

 
  return (
    <>
      <Container className={classes.root}>
        <Grid
          container
          justify='space-between'
          alignItems='center'
          direction='row'
        >
          {loading == false ? (
            <Avatar
              alt='icon'
              src={coin.image.large}
              className={classes.avatar}
            />
          ) : (
            <Skeleton
              animation='wave'
              variant='circle'
              width={100}
              height={100}
            />
          )}

          {loading === false ? (
            <Link
              underline='none'
              href={coin.links.blockchain_site[0]}
              rel='noopener noreferrer'
              target='_blank'
            >
              <Button variant='outlined' color='primary'>
                click for more info
              </Button>
            </Link>
          ) : (
            <Skeleton animation='wave' width={100} height={100} />
          )}

          {loading == false ? (
            <Typography color='textPrimary' variant='h6'>
              {coin.id.toUpperCase()}
            </Typography>
          ) : (
            <Skeleton animation='wave' width={100} height={100} />
          )}
        </Grid>
        <br />
        <Grid
          container
          justify='space-between'
          alignItems='center'
          direction='row'
        >
          {loading === false ? (
            <Card className={classes.card}>
              <CardHeader
                title='Ranks'
                avatar={<ScoreIcon color='secondary' />}
              />
              <CardContent className={classes.cardCont}>
                <Typography style={{ color: 'green' }}>
                  {text.COINGECKO_RANK}
                  <Typography style={{ color: 'red' }}>
                    {coin.coingecko_rank}
                  </Typography>
                </Typography>

                <Typography style={{ color: 'green' }}>
                  {text.COMMUNITY_SCORE}
                  <Typography style={{ color: 'red' }}>
                    {coin.community_score}
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          ) : (
            <Skeleton animation='wave' width={400} height={100} />
          )}

          {loading === false ? (
            <Card className={classes.card}>
              <CardHeader
                title='Must Knows'
                avatar={<InfoIcon color='secondary' />}
              />
              <CardContent className={classes.cardCont}>
                <Typography style={{ color: 'green' }}>
                  {text.HASHING_ALGORITHM}
                  <Typography style={{ color: 'red' }}>
                    {coin.hashing_algorithm}
                  </Typography>
                </Typography>

                <Typography style={{ color: 'green' }}>
                  {text.GENESIS_DATE}
                  <Typography style={{ color: 'red' }}>
                    {coin.genesis_date}
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          ) : (
            <Skeleton animation='wave' width={400} height={100} />
          )}
        </Grid>
        <br />
        {loading === false ? (
          <Paper className={classes.paper} elevation={5}>
            <Typography variant='h4' color='textPrimary'>
              {text.DESCRIPTION}
            </Typography>
            <Divider
              style={{ backgroundColor: '#eb1111', width: '100%', height: 2 }}
            />
            <br />
            <Typography
              variant='subtitle1'
              color='textSecondary'
              align='justify'
            >
              {coin.description.en}
            </Typography>
          </Paper>
        ) : (
          <div className={classes.paperSkeleton}>
            <Skeleton animation='wave' width={800} height={100} />
          </div>
        )}
      </Container>
    </>
  );
}
