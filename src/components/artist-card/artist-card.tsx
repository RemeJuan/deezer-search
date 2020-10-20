import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {artistCardStyles} from './artist-card.styles';
import {IArtistCardProps} from './artist-card.interface';
import { useHistory } from 'react-router-dom';
import {formatFansCount} from '../../core/core.utils';

export default(props: IArtistCardProps) => {
  const history = useHistory();
  const classes = artistCardStyles();
  const {artist} = props;
  
  const {id, picture_medium, name, nb_fan} = artist;
  const handleClick = () => history.push(`/artist/${id}`);
  
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card} onClick={handleClick}>
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
            Fans: {formatFansCount(nb_fan)}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
