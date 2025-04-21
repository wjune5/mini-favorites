import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../store/favoritesSlice';
import { nanoid } from 'nanoid';

export default function AddFavoriteForm() {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [tag, setTag] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !url.trim()) return;
    dispatch(addFavorite({ id: nanoid(), title, url, top: false, tag }));
    setTitle('');
    setUrl('');
    setTag('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-2 mb-4">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="名称" class="border p-1 rounded-lg border-gray-300 focus:outline-none focus:border-violet-500"/>
      <input value={url} onChange={e => setUrl(e.target.value)} placeholder="链接" className="border p-1 rounded-lg border-gray-300 focus:outline-none focus:border-violet-500"/>
      <input value={tag} onChange={e => setTag(e.target.value)} placeholder="分类(可选)" className="border p-1 rounded-lg border-gray-300 focus:outline-none focus:border-violet-500"/>
      <button class="px-4 py-1 text-center text-white bg-violet-600 border border-violet-600 rounded-full active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring" type="submit">添加</button>
    </form>
  );
}
