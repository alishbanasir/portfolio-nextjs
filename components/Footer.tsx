import Image from "next/image";
import Link from "next/link";



export default function Footer() {
  return (
    <div>
          <div className="bg-gradient-to-r from-blue-900 via-blue-300 to-black"></div>
   
  <div className="bg-black lg:justify-center"> 
    <div className="flex flex-wrap lg:flex-nowrap  text-white  m-6">
   <div className="flex flex-wrap  m-3">
      <ul className="m-4 ">
        <li className="mb-2"><Link href="/"><h1 className="text-lg font-bold">Alishba Nasir</h1></Link></li>
        <p className="text-[17px] text-white">Crafting user-centered, responsive <br /> websites with a blend of creativity <br /> and precision. Passionate about <br /> front-end development and always <br /> eager to connect and collaborate.<br />Let’s create something impactful together!.</p>
      </ul>
      <ul className="m-4 mt-10 mb-2">
      
<li className="flex p-1"><Link href="https://www.google.com/maps?q=Karachi,+Pakistan" target="_blank"><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpwCgZl4ksQg_KMMbTtq0jnrye1Ntp4VgeMQ&s" width="26"alt="" /></Link><h2 className="mx-2 hover:text-red-900"><Link href="https://www.google.com/maps?q=Karachi,+Pakistan" target="_blank">Korangi, Karachi</Link></h2></li>
  <li className="flex p-1"><Link href="mailto:alishbanasir54@gmail.com"><Image src="https://i.pinimg.com/236x/0c/4c/bd/0c4cbd674a02adccfb482ee119cfe8d0.jpg" width="26"alt="" /></Link><h2 className="mx-2 hover:text-red-900"><Link href="mailto:alishbanasir54@gmail.com">alishbanasir54@gmail.com</Link></h2></li>
  <li className="flex p-1"><Link href="https://wa.me/+923368219479"><Image src="https://i.pinimg.com/236x/25/58/db/2558db20267873a3104cedc6e277939d.jpg" width="26"alt="" /></Link><h2 className="mx-2 hover:text-red-900"><Link href="https://wa.me/+923368219479">03368219479</Link></h2></li>
      </ul>
  </div>
  <div className=" flex flex-wrap m-3">
      <ul className="m-4 mt-10 mb-2">
        
        <li className="flex p-1"><Link href="/"><Image src="https://i.pinimg.com/236x/0b/f6/b0/0bf6b072bf2eef258404f83b5330f1b2.jpg" width="28"alt=""/></Link><h2 className="mx-2 hover:text-red-900"><Link href="/">Home</Link></h2></li>
  <li className="flex p-1"><Link href="/about"><Image src="https://i.pinimg.com/236x/9f/5e/05/9f5e05c673b47687b790b7151f508c8b.jpg" width="26"alt=""  /></Link><h2 className="mx-2 hover:text-red-900"><Link href="/about">About</Link></h2></li>
  <li className="flex p-1"><Link href="/contactus"><Image src="https://i.pinimg.com/236x/25/58/db/2558db20267873a3104cedc6e277939d.jpg" width="26"alt=""  /></Link><h2 className="mx-2 hover:text-red-900"><Link href="/contactus">Contact-me</Link></h2></li>
      </ul>

    <ul className="m-4 mt-10 justify-between">
    
    <li className="flex p-1 mx-4"><Link href="https://www.facebook.com/alishba.nasir.167"><Image src="https://i.pinimg.com/236x/6d/2a/12/6d2a121a29338e71842d6e3a440592fc.jpg" width="25" alt="" /></Link><h2 className="mx-2 hover:text-red-900"> <Link href="https://www.facebook.com/alishba.nasir.167">Facebook</Link></h2></li>
  <li className="flex p-1 mx-4"><Link href="https://www.linkedin.com/in/alishba-nasirr/"><Image src="https://i.pinimg.com/236x/19/40/ab/1940abcfbcbdbdb11b1b8fdbf2f01973.jpg" width="26" alt="" /></Link><h2 className="mx-2 hover:text-red-900"><Link href="https://www.linkedin.com/in/alishba-nasirr/">LinkdIn</Link></h2></li>
  <li className="flex p-1 mx-4"><Link href="https://github.com/alishbanasir"><Image src="https://i.pinimg.com/474x/ac/58/ea/ac58ea5f8c7a2a3d707201e3352874f9.jpg" width="25" alt="" /></Link><h2 className="mx-2 hover:text-red-900"><Link href="https://github.com/alishbanasir">GitHub</Link></h2></li>
    </ul>
    </div>
    </div>
   <div> <p className="bg-gray-900 text-white text-base text-center p-2">© 2024 Alishba Nasir. All rights reserved.</p>
   </div>
   </div>

   </div>



























































































  );
}