'use client'
import React from 'react'
import {Input,Button} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import { signIn,signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import { credentialSignIn } from '@/actions/signIn';
import { useState } from 'react';
const LoginForm = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isVisible, setIsVisible] = React.useState(false);
    const session = useSession()
    console.log('session',session)

    const toggleVisibility = () => setIsVisible(!isVisible);

    const submit = async (formData:FormData) => {
       const response = await fetch('/api/register',{method:'POST',body:formData})
      // signIn('credentials',{
      //   email, 
      //   password, 
      //   redirect: false, 
      //   callbackUrl: '/' 
      // })
    }
  
  return (
    <div>
      <form action={submit}>
    <Input name='email' type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}
 variant="bordered" label="Email" className="max-w-xs" />
    <Input
      name='password'
      label="Password"
      value={password}
      onChange={(e)=>{setPassword(e.target.value)}}
      variant="bordered"
      placeholder="Enter your password"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
    />
    <Button type='submit' color="primary" variant="bordered">
        Sign Up
    </Button>
    </form>
    <Button type='submit' color="primary" variant="bordered" onClick={(e)=>{
       credentialSignIn({email,password})}}>
        Sign In
    </Button>
    <Button onClick={()=>signIn("github")} color="primary" variant="shadow">
        Sign In with Github
    </Button>  
    <Button onClick={()=>signOut()} color="danger" variant="shadow">
        Sign Out
    </Button>  




    </div>
  )
}

export default LoginForm
