import {prisma} from '@/db/db'
import { NextApiResponse,NextApiRequest } from "next";
import { NextResponse,NextRequest } from 'next/server';
import bcrypt from 'bcrypt';
type ResponseData = {
    message: string
  }
   
  export async function POST(
    req: NextRequest,
    res: NextResponse<ResponseData>
  ) {
    const body = await req.formData()
    try{
      const email = body.get('email') as string
      const password = body.get('password') as string

      const user = await prisma.user.findFirst(
       {
         where:{
           email:email
        }
      }
      )
      if(user)
        throw new Error("User exists")
      const hashedPassword = await bcrypt.hash(password, 12)
      const newUser = await prisma.user.create({
        data:{
          email:email,
          hashedPassword:hashedPassword
        }
      })
      console.log(newUser)
      return NextResponse.json({user:newUser},{status:200})
    }
    catch(e)
    {
      console.log(e)
      return NextResponse.json({message:'user exists'},{status:200})
    }
  }
  