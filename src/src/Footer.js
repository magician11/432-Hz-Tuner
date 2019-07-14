import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import ufo from './images/ufo.svg';

const useStyles = makeStyles(theme => ({
  image: {
    width: 111
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <img src={ufo} alt="ufo" className={classes.image} />
      <Typography variant="body2" color="textSecondary" align="center">
        {'Built with love by '}
        <Link color="inherit" href="https://andrewgolightly.com/">
          Andrew Golightly
        </Link>
      </Typography>
    </footer>
  );
}
