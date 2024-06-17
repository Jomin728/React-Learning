'use client'
import type { Snippet } from "@prisma/client"
import { Editor } from "@monaco-editor/react"
import { useState } from "react"
import { updateSnippet } from "@/actions"

interface snippetEditFormProps{
    snippet:Snippet
}



export default function SnippetEditForm ({snippet}:snippetEditFormProps){
    const  [code,setCode] = useState(snippet.code)
    const handleEditorChange = (value:string|undefined) =>{
       setCode((value||''))
    }
    const editSnippetAction = updateSnippet.bind(null,snippet.id,code)


   return <div>
    <Editor
    height="40vh"
    theme="vs-dark"
    language="javascript"
    defaultValue = {snippet.code}
    onChange={handleEditorChange}
    />
    <form action={editSnippetAction}>
      <button type="submit" className="p-2 border"> Save</button>
    </form>
    Client Component has snippet with title {snippet.title}
   </div>
}