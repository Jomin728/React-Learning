import Link from "next/link";
import homeImg from "public/home.jpg"
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <Hero imgData={homeImg} imgAlt="Car Factory" title="Professional Cloud Hosting" />
  );
}
