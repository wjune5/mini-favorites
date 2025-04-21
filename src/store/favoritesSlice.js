import { createSlice } from '@reduxjs/toolkit'

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('favorites');
        return serializedState ? JSON.parse(serializedState) : [];
    } catch {
        return [];
    }
};
// const initialState = {
//     id: string,
//     title: string,
//     url: string,
//     top: boolean,    // 是否置顶
//     tag: string     // 可选分类标签
// };
const saveState = (state) => {
    localStorage.setItem('favorites', JSON.stringify(state));
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: loadState(),
    reducers: {
        addFavorite(state, action) {
            state.push(action.payload);
            saveState(state);
        },
        deleteFavorite(state, action) {
            const idx = state.findIndex(fav => fav.id === action.payload);
            if (idx > -1) state.splice(idx, 1);
            saveState(state);
        },
        toggleTop(state, action) {
            const fav = state.find(fav => fav.id === action.payload);
            if (fav) fav.top = !fav.top;
            saveState(state);
        },
        clearFavorites(state) {
            state.length = 0;
            saveState(state);
        }
    },
})

// Action creators are generated for each case reducer function
export const { addFavorite, deleteFavorite, toggleTop, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;