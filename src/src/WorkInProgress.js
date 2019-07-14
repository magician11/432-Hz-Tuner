import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core';
import alien from './images/alien.svg';

const useStyles = makeStyles(theme => ({
  image: {
    width: 111
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

export default function WorkInProgress(props) {
  const classes = useStyles();

  return (
    <Dialog
      open={true}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      onClose={props.handleClose}
      maxWidth="xs"
      fullWidth={true}
    >
      <DialogTitle id="alert-dialog-title">Work In Progress!</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          We're actively working on it.
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          Check back again soon!
        </DialogContentText>
      </DialogContent>
      <DialogContent className={classes.dialogContent}>
        <img src={alien} alt="alien" className={classes.image} />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary" autoFocus>
          Ok, I'll be back
        </Button>
      </DialogActions>
    </Dialog>
  );
}
