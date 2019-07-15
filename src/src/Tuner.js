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
  }
}));

export default function Tuner() {
  const classes = useStyles();

  const playFrequency = hz => {
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
        <ButtonGroup
          color="secondary"
          size="large"
          aria-label="Large outlined secondary button group"
        >
          <Button onClick={() => playFrequency(392)}>G (392 Hz)</Button>
          <Button onClick={() => playFrequency(256)}>C (256 Hz)</Button>
          <Button onClick={() => playFrequency(320)}>E (320 Hz)</Button>
          <Button onClick={() => playFrequency(432)}>A (432 Hz)</Button>
        </ButtonGroup>
      </Container>
    </main>
  );
}
