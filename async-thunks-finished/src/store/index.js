import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { AlbumsApi } from './apis/albumsApi';
import { photosApi } from './apis/photosApi';
export const store = configureStore({
  reducer: {
    users: usersReducer,
    [AlbumsApi.reducerPath]:AlbumsApi.reducer,
    [photosApi.reducerPath]:photosApi.reducer
  },
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware()
       .concat(AlbumsApi.middleware)
       .concat(photosApi.middleware)
  }
});

setupListeners(store.dispatch)

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';

export {useFetchAlbumsQuery} from './apis/albumsApi'
export {useAddAlbumsMutation} from './apis/albumsApi'
export {useRemoveAlbumMutation} from './apis/albumsApi'

export {useFetchPhotosQuery,useAddPhotoMutation,useDeletePhotoMutation} from './apis/photosApi'