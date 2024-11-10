
import Link from "next/link";
export default function Header() {
  return (
    <div>
   <div className=" bg-black text-white mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     <ul className=" items-center">
      <Link href="/"><h1><b><span className="text-lg font-extrabold text-left"><span className="font-extrabold text-3xl cursor-pointer"><b>Alishba</b></span></span></b></h1></Link>
    </ul>
   <ul className="md:ml-auto md:mr-auto flex flex-wrap gap-5 items-center text-base justify-center">
      <li className="hover:text-red-900 "><b><Link href="/">Home</Link></b></li>
     <li className="hover:text-red-900"><b><Link href="/about">About</Link></b></li>
      <li className="hover:text-red-900"><b><Link href="/contactus">Contact Us</Link></b></li>
      <li className="hover:text-red-900"><b><Link href="/career">Projects</Link></b></li>
    </ul>
    <ul className="flex gap-5 text-right">
    <li className="hover:text-red-900"><b><Link href="/login">Login</Link></b></li>
    <li className="hover:text-red-900"><b><Link href="/signup">Sign up</Link></b></li>
    </ul>
    </div>
  </div>

  )}
































































































  