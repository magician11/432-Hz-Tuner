import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import WorkInProgress from './WorkInProgress';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    height: '432px'
  },
  cardContent: {
    flexGrow: 1
  }
}));

export default function Home() {
  const classes = useStyles();
  const [showDialog, setDialog] = useState(false);

  return (
    <main>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            432 Hertz
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            A=432 Hz, known as Verdi’s ‘A’ is a tuning that is mathematically
            consistent with the universe.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setDialog(true)}
                >
                  Instrument Tuner
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => setDialog(true)}
                >
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4} justify="center">
          <Grid item xs={12} md={8}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                src="https://www.youtube.com/embed/L2PQKda8bj0"
                title="Image title"
                component="iframe"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Music
                </Typography>
                <Typography>
                  Songs recorded at the tuning of or converted to 432 Hz
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setDialog(true)}
                >
                  View More Songs
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {showDialog && <WorkInProgress handleClose={() => setDialog(false)} />}
    </main>
  );
}
