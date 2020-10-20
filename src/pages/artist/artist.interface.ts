import {IArtistDetails, IArtistTracks} from '../../api/artist/artist.interface';

export interface IArtistBoxProps {
  artist: IArtistDetails;
}

export interface IArtistTopTracksProps {
  tracks: IArtistTracks[]
}
