import React from 'react';
import {IArtistAlbumsProps} from '../artist.interface';
import AlbumCard from './album-card/album-card';
import {Container} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {searchStyles} from '../../search/search.styles';

export default (props: IArtistAlbumsProps) => {
  const {albums} = props;
  const classes = searchStyles();
  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
        </Grid>
      </Container>
    </>
  );
}
