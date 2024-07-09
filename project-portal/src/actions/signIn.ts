import { signIn } from "next-auth/react"
interface formData {
    email:string,
    password:string
}
export  async function  credentialSignIn(formData:formData){
    console.log(formData['email'])
   const resp = await signIn('credentials',{
        email:formData['email'], 
        password:formData['password'], 
        redirect: false, 
        callbackUrl: '/' 
    })
    console.log(resp)
} 