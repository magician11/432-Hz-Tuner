import React from 'react';
import { Typography, Container, ButtonGroup, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  tuners: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  tunerButtons: {
    padding: theme.spacing(3, 0, 3),
    display: 'inherit'
  }
}));

export default function Tuner() {
  const classes = useStyles();

  const playFrequency = hz => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    const o = context.createOscillator();
    const g = context.createGain();
    o.frequency.value = hz;
    o.connect(g);
    o.type = 'sine';
    g.connect(context.destination);
    o.start(0);

    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 8);
  };

  return (
    <main>
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Tuner
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Tuning to 432 Hz
          </Typography>
        </Container>
      </div>
      <Container className={classes.tuners} maxWidth="md">
        <Typography variant="h5" gutterBottom>
          Ukulele
        </Typography>
        <Typography variant="body1" gutterBottom>
          To hear the ukelele notes tuned to the 432 Hz frequency, click each
          button below.
        </Typography>
        <ButtonGroup
          color="secondary"
          size="large"
          aria-label="Large outlined secondary button group"
          className={classes.tunerButtons}
        >
          <Button onClick={() => playFrequency(392)}>G (392 Hz)</Button>
          <Button onClick={() => playFrequency(256)}>C (256 Hz)</Button>
          <Button onClick={() => playFrequency(320)}>E (320 Hz)</Button>
          <Button onClick={() => playFrequency(432)}>A (432 Hz)</Button>
        </ButtonGroup>
        <Typography variant="body1" gutterBottom>
          The Guitar Tuna app (available on{' '}
          <a href="https://play.google.com/store/apps/details?id=com.ovelin.guitartuna&hl=en_US">
            Android
          </a>
          ) has a setting where you can calibrate the pitch to 432 Hz.
          Incidentally{' '}
          <a href="https://twitter.com/AndrewGolightly/status/1056427488086319105">
            Andrew has the met the developer of this app
          </a>
          .
        </Typography>
      </Container>
    </main>
  );
}
