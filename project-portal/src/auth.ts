'use server'
import NextAuth from "next-auth"
import Github from 'next-auth/providers/github';
import type { Adapter } from "next-auth/adapters"

import { PrismaAdapter } from '@auth/prisma-adapter';
import {prisma} from "@/db/db";
import { compare } from "bcrypt"
import Credentials from "next-auth/providers/credentials";
const prismaAdapter:Adapter|any = PrismaAdapter(prisma)
const GITHUB_CLIENT_ID:string = process.env.GITHUB_CLIENT_ID || '';
const GITHUB_CLIENT_SECRET:string = process.env.GITHUB_CLIENT_SECRET || '';
export const auth = NextAuth({
    adapter: prismaAdapter,
    providers:[
        Github({
            clientId: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
          }),
        Credentials({
          id: 'credentials',
          name: 'Credentials',    
          credentials:{
            email: {label: 'Email',
              type: 'text',},
            password: {label: 'Password',
              type: 'password'},
          },
          async authorize(credentials) {
            console.log('jomin',credentials)
              let user = null
              if(!credentials?.password && credentials?.email)
                throw new Error('Email and Password is required');
               user = await prisma.user.findFirst({where:{
                email:credentials?.email
              }});
              if(!user)
                throw new Error('Email does not exist');
  
              const isCorrectPassword = await compare(credentials?.password || '' ,user.hashedPassword || '')
              
              if(!isCorrectPassword)
                throw new Error('Password is wrong')
              return user  
          },
        }
      )
    ],
    session:{
      strategy:'jwt',
      maxAge:30 * 24 * 60 * 60
    },
    callbacks:{
      jwt({ token,user, trigger, session, account }) {
        if (trigger === "update") token.name = session.user.name
        if (account?.provider === "keycloak") {
          return { ...token, accessToken: account.access_token }
        }
        if(user)
          {
            token.email= user.email
          }
        return token
      },
      async session({ session, token }) {
        if (token?.accessToken) {
          session.accessToken = token.accessToken
        }
        return session
      },
    },
    secret: 'jomin rajesh koottummel'

  })

  declare module "next-auth" {
    interface Session {
      accessToken?: string
    }
  }
  
  declare module "next-auth/jwt" {
    interface JWT {
      accessToken?: string
    }
  }
  
  
