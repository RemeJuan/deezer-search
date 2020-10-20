import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {artistCardStyles} from './artist-card.styles';
import {IArtistCardProps} from './artist-card.interface';

export default(props: IArtistCardProps) => {
  const classes = artistCardStyles();
  const {artist} = props;
  
  const {picture_medium, name, nb_fan} = artist;
  const fans = parseFloat((nb_fan / 1000).toFixed(2));

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={picture_medium}
          title={name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography>
            Fans: {Intl.NumberFormat('en-US').format(fans)}k
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
