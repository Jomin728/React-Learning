import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";
const AlbumslistItem = ({album}) =>{

    const [removeAlbum,results] = useRemoveAlbumMutation()

    const handleRemove = () =>{
        removeAlbum(album)
    }

    const header = <div>
        <Button onClick={handleRemove} loading={results.isLoading}><GoTrashcan/></Button>
        {album.title}</div>
   return <ExpandablePanel key={album.id} header={header} >
    <PhotosList album={album} />
   </ExpandablePanel>
}

export default AlbumslistItem