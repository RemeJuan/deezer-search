import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {IArtistBoxProps} from '../artist.interface';
import {formatFansCount} from '../../../core/core.utils';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: 300
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 250,
    },
  }),
);

export default (props: IArtistBoxProps) => {
  const classes = useStyles();
  
  const {artist} = props;
  const {picture_big, name, nb_fan} = artist;
  
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={picture_big}
        title={name}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Fans: {formatFansCount(nb_fan)}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
