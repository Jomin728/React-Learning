
import Image from "next/image";
import { getServerSession } from "next-auth/next";
import LoginForm from "@/components/login-form";
export default function Home() {

  return (
   <div>
    <LoginForm />
   </div>
  );
}
