export interface IArtist {
  id: string;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album: number;
  nb_fan: number;
  radio: boolean;
  tracklist: string;
  type: string;
}

export interface IArtistDetails extends IArtist {
  share: string;
}

export interface IArtistTracks {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  contributors: IArtistTracksContributor[];
  md5_image: string;
  artist: IArtistTracksArtist;
  album: IArtistTracksAlbum;
  type: string;
}

export interface IArtistTracksContributor {
  id: number;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  radio: true;
  tracklist: string;
  type: string;
  role: string
}

export interface IArtistTracksArtist {
  id: number;
  name: string;
  tracklist: string;
  type: string
}

export interface IArtistTracksAlbum {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  tracklist:string;
  type: string;
}

export interface IArtistAlbum {
  id: number
  title: string
  link: string
  cover: string
  cover_small: string
  cover_medium: string
  cover_big: string
  cover_xl: string
  md5_image: string
  genre_id: number
  fans: number
  release_date: string
  record_type: string
  tracklist: string
  explicit_lyrics: boolean
  type: string
}
