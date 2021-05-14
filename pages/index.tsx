import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Head from "next/head"
import Coins from "../components/layout/main/Coins"
import styles from '../styles/Home.module.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link, Typography } from '@material-ui/core';

import text from "../language/text.json"
import TablePagination from "../components/layout/navigation/TablePagination"

export default function Home() {



  return (
    <div className={styles.container}>
      <Head>
        <title>{text.APP_TITLE}</title>
        <meta name='description' content='crypto tracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

    <Coins/>
    <TablePagination/>
      <footer className={styles.footer}>
        <Link
          href='https://github.com/sepehr-mohseni'
          target='_blank'
          rel='noopener noreferrer'
          underline='none'
        >
          <Typography variant='subtitle2' color="textSecondary">
            {text.VISIT_GITHUB}
          </Typography>
          &nbsp;
          <GitHubIcon color='secondary' />
        </Link>
      </footer>
    </div>
  );
}


