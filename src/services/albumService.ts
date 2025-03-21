import { AlbumType, CrupdateAlbum, SongType } from '@/types/types';
import { NotImplementedError } from '@/utils/errors';

export const crupdateAlbums = (_toCrupdate: CrupdateAlbum[]): AlbumType[] => {
  throw new NotImplementedError();
};

export const dropAlbums = (_toDrop: CrupdateAlbum[]): AlbumType[] => {
  throw new NotImplementedError();
};

export const getAlbums = (_filterCondition?: CrupdateAlbum): AlbumType[] => {
  throw new NotImplementedError();
};

export const getAlbumById = (_id: number): AlbumType => {
  throw new NotImplementedError();
};

export const albumsLinkToSongs = (_album: AlbumType, _songs: SongType[]): AlbumType[] => {
  throw new NotImplementedError();
};

export const albumsUnlinkToSongs = (_album: AlbumType, _songs: SongType[]): AlbumType[] => {
  throw new NotImplementedError();
};

export const convertFolderToAlbum = (_folder_path: string): AlbumType[] => {
  throw new NotImplementedError();
};
