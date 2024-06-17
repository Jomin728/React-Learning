import React from 'react'
import { useDeletePhotoMutation, useRemoveAlbumMutation } from '../store'
import { GoTrashcan } from 'react-icons/go'
const PhotosListItem = ({photo}) => {

    const [deletePhoto] = useDeletePhotoMutation()

    const handleRemovePhoto = ()=>{
      deletePhoto(photo)
    }
  return (
    <div onClick={handleRemovePhoto} className='relative m-2'>
        <img className='h-20 w-20' src={photo.url}/>
        <div className='flex inset-0 absolute items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80'>
         <GoTrashcan className='text-3xl'/>
        </div>
    </div>
  )
}

export default PhotosListItem