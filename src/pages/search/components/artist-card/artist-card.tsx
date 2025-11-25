import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { artistCardStyles } from './artist-card.styles';
import { IArtistCardProps } from './artist-card.interface';
import { useNavigate } from 'react-router-dom';
import { formatFansCount } from '../../../../core/core.utils';

export default function ArtistCard(props: IArtistCardProps) {
  const navigate = useNavigate();
  const { classes } = artistCardStyles();
  const { artist } = props;
  
  const { id, picture_medium, name, nb_fan } = artist;
  const handleClick = () => navigate(`/artist/${id}`);
  
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
