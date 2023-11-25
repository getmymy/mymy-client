import ListItem, { Music } from './ListItem';

export default function List({ musicList }: { musicList: Music[] }) {
  return musicList.map((music) => <ListItem key={music.id} music={music} />);
}
