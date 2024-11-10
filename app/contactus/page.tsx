
import Link from "next/link";

export default function Contactus() {
  return (
   <div className="p-5 bg-gradient-to-r from-blue-900 via-blue-300 to-black">
  
 <div className="flex flex-wrap justify-between bg-transparent shadow-sm p-10">
<div className="w-full lg:w-3/6">
  <h1 className="font-extrabold text-3xl"><b><span className="">Contact-Me</span></b></h1>
  <p className="text-[18px] text-black  w-full lg:w-11/12 text-justify">Thank you for visiting my portfolio! If you’re interested in working together, have questions, or just want to connect, I’d love to hear from you.
  Feel free to reach out via email or connect with me on social media. You can also use the contact form below, and I’ll do my best to respond promptly. Looking forward to connecting!</p>
  <div className="text-lg flex flex-wrap my-2 font-bold text-justify">
<ul className="p-2 leading-relaxed">
   <h2 className="font-bold mb-3">Connected me!</h2>
<li className="flex p-1"><Link href="https://www.google.com/maps?q=Karachi,+Pakistan" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/3177/3177361.png" width="25"alt="" /></Link><h2 className="mx-2"><Link href="https://www.google.com/maps?q=Karachi,+Pakistan" target="_blank">Karachi, Pakistan</Link></h2></li>
  <li className="flex p-1"><Link href="mailto:alishbanasir54@gmail.com"><img src="https://cdn-icons-png.flaticon.com/128/542/542689.png" width="25"alt="" /></Link><h2 className="mx-2"><Link href="mailto:alishbanasir54@gmail.com">alishbanasir54@gmail.com</Link></h2></li>
  <li className="flex p-1"><Link href="tel:03368219479"><img src="https://cdn-icons-png.flaticon.com/128/126/126341.png" width="24"alt="" /></Link><h2 className="mx-2"><Link href="tel:03368219479">03368219479</Link></h2></li>
 
  </ul> 
  <ul className="p-2 leading-relaxed"><h2 className="mb-3">Networking!</h2>
  <li className="flex p-1"><Link href="https://www.facebook.com/alishba.nasir.167"><img src="https://cdn-icons-png.flaticon.com/128/1051/1051309.png" width="23" alt="" /></Link><h2 className="mx-4 bottom-3"><Link href="https://www.facebook.com/alishba.nasir.167" >Facebook</Link></h2></li>
  <li className="flex p-1"><Link href="https://www.linkedin.com/in/alishba-nasirr/"><img src="https://cdn-icons-png.flaticon.com/128/14715/14715341.png" width="23" alt="" /></Link><h2 className="mx-4 bottom-3"><Link href="https://www.linkedin.com/in/alishba-nasirr/" >LinkdIn</Link></h2></li>
  <li className="flex p-1"><Link href="https://github.com/alishbanasir"><img src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png" width="23" alt="" /></Link><h2 className="mx-4 bottom-3"><Link href="https://github.com/alishbanasir" >GitHub</Link></h2></li>
  </ul></div>
</div>

<div className=" border-black">
  <h1 className="font-bold text-3xl"><b>Send Us <span className="text-red-900">A Message</span> </b></h1>
   <form className="p-1 mt-3 text-black rounded-2xl leading-relaxed border border-black ">
  <input className="bg-transparent text-black focus:outline-none" type="text" placeholder="Enter your Full name" />
</form>
  <form className="p-1 mt-3 rounded-2xl leading-relaxed border border-black ">
  <input className="bg-transparent text-black bg-green-300 focus:outline-none"  type="email" placeholder="Enter your email" /></form>
  <form className="rounded-2xl p-1 mt-3 leading-relaxed border text-black border-black"> <textarea className="bg-transparent focus:outline-none"  typeof="text" placeholder="Message" name="text" id="text"></textarea></form>
  <button className="mt-3 rounded-2xl text-lg px-5 p-2 text-center hover:bg-black border border-black text-red-900 font-bold"><a href="/">
   Send Message
   </a></button>
 
</div>
  
  
 </div>
    </div>
  );
}
