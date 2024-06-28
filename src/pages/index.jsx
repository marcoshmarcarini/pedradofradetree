import Links from "@/components/Links";
import Logo from "@/components/Logo";
import Image from "next/image";

export default function home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-5" id={`tree_content`}>
        <Logo />
        <Links />
      </div>
    </>
  )
}