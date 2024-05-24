import { useState } from "react"
import ImageShow from "./ImageShow"
function ImageList({images})
{

  const renderedList = images.map((image,index)=>{
    return <ImageShow image={image} key={image.id} />
  })
  return <div>{renderedList}</div>
}

export default ImageList