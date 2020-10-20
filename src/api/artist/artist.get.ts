import {IArtist, IArtistTracks} from './artist.interface';
import {BASE_URL, DEFAULT_HEADERS} from '../api.constants';

export const artistSearch = async (query: string): Promise<IArtist[]> => {
  const options = {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  }
  const url = `${BASE_URL}/search/artist?limit=9&q=${query}`;
  const response = await fetch(url, options);
  const json = await response.json();
  return json.data;
}


export const artistTracks = async (artistId: number): Promise<IArtistTracks[]> => {
  const options = {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  }
  const url = `${BASE_URL}/artist/${artistId}/top?limit=5`;
  const response = await fetch(url, options);
  const json = await response.json();
  return json.data;
}
