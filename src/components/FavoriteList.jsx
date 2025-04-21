import { useSelector } from 'react-redux';
import FavoriteItem from './FavoriteItem';

export default function FavoriteList() {
  const favorites = useSelector(state => state.favorites);

  // 置顶项优先
  const sorted = [...favorites].sort((a, b) => (b.top ? 1 : 0) - (a.top ? 1 : 0));
  return (
    <div>
      {sorted.map(fav => (
        <FavoriteItem key={fav.id} fav={fav} />
      ))}
    </div>
  );
}
