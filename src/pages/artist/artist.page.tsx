import React, {useEffect, useState} from 'react';
import {useRouteMatch} from 'react-router-dom';
import {IArtistAlbum, IArtistDetails, IArtistTracks} from '../../api/artist/artist.interface';
import AppBar from '../../components/app-bar/app-bar';
import {artistAlbums, artistDetails, artistTracks} from '../../api/artist/artist.get';
import LinearProgress from '@material-ui/core/LinearProgress';
import {Container} from '@material-ui/core';
import {searchStyles} from '../search/search.styles';
import ArtistBox from './components/artist-box';
import Grid from '@material-ui/core/Grid';
import TopTracks from './components/top-tracks';
import Albums from './components/albums';

export default () => {
  const classes = searchStyles();
  const [artist, setArtist] = useState<IArtistDetails>();
  const [tracks, setTracks] = useState<IArtistTracks[]>([]);
  const [albums, setAlbums] = useState<IArtistAlbum[]>([]);
  
  const match = useRouteMatch();
  // @ts-ignore
  const artistId = match.params.artistId;
  
  useEffect(() => {
    async function load() {
      const details = await artistDetails(artistId);
      const tracks = await artistTracks(artistId);
      const albums = await artistAlbums(artistId);
      
      const response = await Promise.all([details, tracks, albums]);
      
      setArtist(response[0]);
      setTracks(response[1]);
      setAlbums(response[2]);
    }
  
    load();
  }, [artistId]);
  
  return (
    <>
      <AppBar handleSubmit={console.log}/>
      {!artist ?
        <LinearProgress/>:
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item md={8} xs={12}>
              <ArtistBox artist={artist}/>
            </Grid>
            <Grid item md={4} xs={12}>
              <TopTracks tracks={tracks}/>
            </Grid>
          </Grid>
          <Grid container  spacing={4}>
            <Albums albums={albums} />
          </Grid>
        </Container>
      }
    </>
  );
}
