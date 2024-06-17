import React from 'react'
import { useFetchPhotosQuery,useAddPhotoMutation } from '../store'
import Button from './Button'
import Skeleton from './Skeleton'
import PhotosListItem from './PhotosListItem'
const PhotosList = ({album}) => {
    const {data,error,isLoading}=useFetchPhotosQuery(album)
    const[addPhoto,addPhotoResults] = useAddPhotoMutation();
    const handleAddPhoto = () =>{
        addPhoto(album)
    }
    let content
    if(isLoading)
        {
            content = <Skeleton times={3} className="h-8 w-8" />
        }
        else
        {
            
            content = data.map((photo)=>{
                return <PhotosListItem key={photo.id} photo={photo} />
            })
        }
  return (
    <div>
    <div className='m-2 flex flex-row center-items justify-between '>
        <h3 className='text-lg font-bold'>
          Photos In {album.title}
        </h3>
        <Button onClick={handleAddPhoto} loading={addPhotoResults.isLoading} >
            Add Photo
        </Button>
    </div>
    <div className='m-2 flex flex-row center-items justify-center '>
        {content}
    </div>
    </div>
  )
}

export default PhotosList