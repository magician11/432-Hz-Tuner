import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MusicIcon from '@material-ui/icons/MusicNote';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <MusicIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          432 Hertz
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
