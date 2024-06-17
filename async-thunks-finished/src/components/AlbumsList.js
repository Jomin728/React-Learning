import { useFetchAlbumsQuery,useAddAlbumsMutation } from "../store";
import Skeleton from './Skeleton'
import Button from './Button'
import ExpandablePanel from './ExpandablePanel'
import AlbumslistItem from "./AlbumsListItem";
function AlbumsList({ user }) {
  const {data,error,isLoading} = useFetchAlbumsQuery(user)
  const [addAlbums,results] = useAddAlbumsMutation()
  const handleAddAlbum = () =>{
    addAlbums(user)
  }
  let content
  if(isLoading)
    {
      content=<Skeleton className="h-10 w-20" times={3} />
    }
    else
    {
      content = data.map((album)=>{
       return <AlbumslistItem key={album.id} album={album}  />

      })
    }
  return <div>
    <div className="m-2 flex flex-row items-center justify-between">
      <h3 className="text-lg font-bold">
      Albums for {user.name}
        </h3>
    <Button loading={results.isLoading} onClick = {handleAddAlbum}>+ Add Album</Button>
      </div>
      <div>
        {content}
      </div>
    </div>;
}

export default AlbumsList;
