'use client'
import Link from "next/link";
import { Avatar, Button, Input, Navbar,NavbarBrand,NavbarContent,NavbarItem, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { auth } from "@/auth";
import * as actions from '@/actions'
import { useSession } from "next-auth/react";
export default function HeaderAuth(){
    const session = useSession() //this is used instead of server component based approach as this will not access session and will not make route dynamic
    let authContent:React.ReactNode
    if(session.status === 'loading')
        {
            authContent = null
        }
    else if(session?.data?.user)
        {
            authContent = <div>
                <Popover placement="left">
                    <PopoverTrigger>
                    <Avatar src={session.data?.user.image || ''} />
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="p-4">
                           <form action={actions.signOut}>
                             <Button type="submit" >Sign Out</Button>
                           </form>
                        </div>
                    </PopoverContent>
          
                </Popover>
            </div>
        }
    else{
        authContent = <>
        <NavbarItem>
            <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered" >Sign In</Button>
            </form>
        </NavbarItem>
        <NavbarItem>
            <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="flat" >Sign Up</Button>
            </form>
        </NavbarItem>
        </>
        }

        return authContent;

}