import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {albumCardStyles} from './album-card.styles';
import {IAlbumCardProps} from './album-card.interface';
import { useHistory } from 'react-router-dom';
import {formatFansCount} from '../../../../core/core.utils';

export default(props: IAlbumCardProps) => {
  const classes = albumCardStyles();
  const {album} = props;
  
  const {cover_medium, fans, release_date, title} = album;
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={cover_medium}
          title={title}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h6">
            {title}
          </Typography>
          <Typography>
            Fans: {formatFansCount(fans)}
          </Typography>
          <Typography>
            Released: {release_date}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
