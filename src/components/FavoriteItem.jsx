import { useDispatch } from 'react-redux';
import { deleteFavorite, toggleTop } from '../store/favoritesSlice';

export default function FavoriteItem({ fav }) {
  const dispatch = useDispatch();
  return (
    <div class="flex items-center justify-between py-2 px-4 my-2 rounded shadow">
      <div>
        <a href={fav.url} target="_blank" rel="noopener noreferrer" class={`font-semibold ${fav.top ? 'text-yellow-400' : ''} hover:underline`}>{fav.title}</a>
        <span class="bg-purple-200 hover:bg-purple-300 py-1 px-2 ml-10 rounded-full text-sm">{fav.tag && `${fav.tag}`}</span>
      </div>
      <div>
        <button onClick={() => dispatch(toggleTop(fav.id))} class="px-4 text-center text-violet-600 border border-violet-600 rounded-l-full hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
          {fav.top ? '取消置顶' : '置顶'}
        </button>
        <button onClick={() => dispatch(deleteFavorite(fav.id))} class="px-4 text-center text-violet-600 border border-violet-600 rounded-r-full hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
          删除
        </button>
      </div>
    </div>
  );
}
