import {IArtist} from './artist.interface';
import {BASE_URL, DEFAULT_HEADERS} from '../api.constants';

export const artistSearch = async (query: string): Promise<IArtist[]> => {
  const options = {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  }
  const response = await fetch(BASE_URL, options);
  return await response.json();
}
