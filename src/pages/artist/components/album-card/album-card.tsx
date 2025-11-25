import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { albumCardStyles } from './album-card.styles';
import { IAlbumCardProps } from './album-card.interface';
import { formatFansCount } from '../../../../core/core.utils';

export default function AlbumCard(props: IAlbumCardProps) {
  const { classes } = albumCardStyles();
  const { album } = props;
  
  const { cover_medium, fans, release_date, title } = album;
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
