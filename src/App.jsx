import { useState } from 'react'
import AddFavoriteForm from './components/AddFavoriteForm';
import FavoriteList from './components/FavoriteList';
import { useDispatch } from 'react-redux';
import { clearFavorites } from './store/favoritesSlice';
import './App.css'

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="pt-8 p-4 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-4">迷你网页收藏夹</h1>
        <AddFavoriteForm />
        <button onClick={() => dispatch(clearFavorites())} className="px-4 text-center text-violet-600 border border-violet-600 rounded-full hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">清空</button>
        <FavoriteList />
      </div>
    </>
  )
}

export default App
