import React from 'react'
import { db } from '@/db'
import { notFound } from 'next/navigation'
import SnippetEditForm from '@/components/snippet-edit-form'
interface SnipptEditPageProps{
    params:{
        id:string
    }
}

const SnippetEditPage = async (props:SnipptEditPageProps) => {
    const id = parseInt(props.params.id)
    const snippet = await db.snippet.findFirst({
        where:{id:id} 
     })
     if(!snippet)
        {
            notFound()
        }

  return (
    <div>
        <SnippetEditForm snippet={snippet} />
        </div>
  )
}

export default SnippetEditPage