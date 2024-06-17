'use client'

import Image from 'next/image'
import { Button } from '@nextui-org/react'
import * as actions from '@/actions'
import {auth} from '@/auth'
import { useSession } from 'next-auth/react'
import Profile from '@/components/Profile'
import TopicCreateForm from '@/components/topics/topic-create-form'
import TopicsList from '@/components/topics/topics-list'
import { Divider } from '@nextui-org/react'
export default function Home() {
  // const session = await auth()  //server component
  const session = useSession()
  return (
   <div className='grid grid-cols-4 gap-4 p-4'>
    <div className='col-span-3'>
      <h1 className='text-xl m-2'>
        Top Posts
      </h1>
    </div>
    <div className='border shadow py-3 px-2'>
      <TopicCreateForm/>
      <Divider className='my-2' />
      <h3 className='text-lg'>Topics </h3>
      <TopicsList/>
    </div>
   </div>
  )
}
