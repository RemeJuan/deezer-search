import React from 'react';
import {IArtistTopTracksProps} from '../artist.interface';
import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      marginTop: theme.spacing(2),
    },
    listItem: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    }
  }),
);

export default (props: IArtistTopTracksProps) => {
  const {tracks} = props;
  
  const classes = useStyles();
  
  
  
  return (
    <>
      <Typography component="h5" variant="h5">
        Top tracks:
      </Typography>
      <div className={classes.list}>
        {tracks.map((track, idx) => {
          const timeString = `${track.duration/60|0}:${track.duration%60}`
          
          return (
            <Grid container key={track.id} spacing={2} className={classes.listItem}>
              <Grid item xs={1}>{idx + 1}</Grid>
              <Grid item xs={9}>{track.title_short}</Grid>
              <Grid item xs={1}>{timeString}</Grid>
            </Grid>
          )
        })}
      </div>
    </>
  );
}
