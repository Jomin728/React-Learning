'use server';
import { db } from "@/db";
import {redirect} from "next/navigation";
export async function updateSnippet(id:number,code:string) {
    console.log(id,code)
      await db.snippet.update({
        where:{id},
        data:{code}
      })
      redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id:number)
{
    await db.snippet.delete({
        where:{id}
    })
    redirect('/');
}


    
export async function createSnippet( formState:{message:string}, formData:FormData){

  try{

    const title = formData.get("title")
    const code = formData.get("code") 

    if(typeof title != 'string' || title.length<3){
        return {
            message:'Title must be longer'
        }
    }
    if(typeof code !== 'string' || code.length<10)
        {
            return {
                message:'Code must be longer'
            }
        }

    const snippet = await db.snippet.create({
        data:{
            title,
            code
        }
    })
    console.log(snippet)
    redirect('/')

  }
  catch(error)
  {
    if(error  instanceof Error){
        return {
            message:error.message
        }
    }
    else{
        return {
            message:'Something went wrong....'
        }
    }
  }



    
} 