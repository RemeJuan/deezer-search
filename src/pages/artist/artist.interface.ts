import {IArtistAlbum, IArtistDetails, IArtistTracks} from '../../api/artist/artist.interface';

export interface IArtistBoxProps {
  artist: IArtistDetails;
}

export interface IArtistTopTracksProps {
  tracks: IArtistTracks[]
}

export interface IArtistAlbumsProps {
  albums: IArtistAlbum[],
}
