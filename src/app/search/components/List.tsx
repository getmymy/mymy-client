import { FC } from 'react';

import ListItem, { Music } from './ListItem';

interface Props {
  musicList: Music[];
  onListItemClick: (item: Music) => void;
}

const List: FC<Props> = ({ musicList, onListItemClick }) => {
  return musicList.map((music) => <ListItem key={music.id} music={music} onClick={() => onListItemClick(music)} />);
};

export default List;
