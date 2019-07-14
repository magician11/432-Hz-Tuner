import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { fetchAllMusic } from './modules/firebase';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
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

export default function Music() {
  const classes = useStyles();
  const [music, setMusic] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const music = await fetchAllMusic();
      setMusic(music);
    };

    fetchData();
  }, []);

  const generateSongGrid = () => {
    let musicGrid;

    if (!music) {
      musicGrid = <Typography>Loading...</Typography>;
    } else if (music.length > 0) {
      const createCard = song => (
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            src={`https://www.youtube.com/embed/${song.id}`}
            title={song.title}
            component="iframe"
          />
          <CardContent className={classes.cardContent}>
            <Typography>{song.title}</Typography>
          </CardContent>
        </Card>
      );

      musicGrid = (
        <Grid container spacing={4}>
          {music.map(song => (
            <Grid item key={song.id} xs={12} sm={6} md={4}>
              {createCard(song)}
            </Grid>
          ))}
        </Grid>
      );
    }

    return musicGrid;
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
            Music
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Songs recorded at the tuning of or converted to 432 Hz
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        {generateSongGrid()}
      </Container>
    </main>
  );
}
