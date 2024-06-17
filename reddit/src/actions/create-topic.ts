'use server'
import {z} from 'zod'
import type { Topic } from '@prisma/client';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import paths from '@/paths';
import { revalidatePath } from 'next/cache';
const createTopicSchema = z.object({
    name:z.string().min(3).regex(/^[a-z-]+$/,{message:'Must be lowercase letters or dashes'}),
    description:z.string().min(10)
})

interface createTopicFormState{
    errors: {
        name?: string[];
        description?: string[];
        _form?: string[];
      };
}

export async function createTopic(formState:createTopicFormState,formData:FormData):Promise<createTopicFormState>{
    //revalidate home page after creating a topic
    await new Promise(resolve => setTimeout(resolve,2500))
    const name = formData.get('name');
    const description = formData.get('description')

    const result = createTopicSchema.safeParse({
        name,description
    })

    if(!result.success)
        {
            console.log(result.error.flatten().fieldErrors)
            return {errors:result.error.flatten().fieldErrors};
        }

        let topic:Topic
        try{
           topic = await db.topic.create({
            data:{
                slug:result.data.name,
                description:result.data.description
            }
           })
           revalidatePath(paths.home())

           redirect(paths.topicShow(topic.slug))
        }
        catch(err:unknown)
        {

        }

        





        return {errors:{}};

}