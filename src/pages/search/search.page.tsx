import React, {useState} from 'react';
import AppBar from '../../components/app-bar/app-bar';
import {artistSearch} from '../../api/artist/artist.get';
import {IArtist} from '../../api/artist/artist.interface';
import Card from '../../components/artist-card/artist-card';
import {Container} from '@material-ui/core';
import {searchStyles} from './search.styles';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

export default () => {
  const classes = searchStyles();
  const [artists, setArtists] = useState<IArtist[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
  const handleSearch = async (query: string) => {
    setLoading(true);
    const results = await artistSearch(query);

    setArtists(results);
    setLoading(false);
  }
  
  return (
    <>
      <AppBar handleSubmit={handleSearch}/>
  
      {loading ?
        <LinearProgress/> :
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {artists.map(artist => (
              <Card key={artist.id} artist={artist}/>
            ))}
          </Grid>
        </Container>
      }
    </>
  );
}
