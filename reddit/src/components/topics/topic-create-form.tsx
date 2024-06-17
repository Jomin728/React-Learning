'use client'
import React from 'react'
import { Input,Button,Textarea,Popover,PopoverTrigger,PopoverContent  } from '@nextui-org/react'
import * as actions from '@/actions'
import { useFormState } from 'react-dom'
import FormButton from '../common/form-button'
const TopicCreateForm = () => {

  const [formState,action] = useFormState(actions.createTopic,{
    errors:{}
  })

  return (
   <Popover placement='left'>
    <PopoverTrigger>
        <Button>Create a Topic</Button>
    </PopoverTrigger>
    <PopoverContent>
        <form action={action}>
            <div className='flex flex-col gap-4 p-4 w-80'>
               <h3 className='text-lg'>Create a topic</h3>
               <Input label="Name" name='name' labelPlacement='outside' placeholder='Name' isInvalid={!!formState.errors.name} errorMessage={formState.errors.name?.join(', ')} />
               <Textarea label="description" name='description' labelPlacement='outside' placeholder='Describe your topic'  />
               <FormButton>Save</FormButton>
            </div>
        </form>
    </PopoverContent>
    </Popover>
  )
}

export default TopicCreateForm