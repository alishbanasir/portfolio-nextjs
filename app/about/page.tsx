import Link from "next/link";
import Image from "next/image";
import profile from "../public/images/profile.png"

export default function About() {
  return (


































<div className="p-10 bg-gradient-to-r from-blue-900 via-blue-300 to-black">
  <div className="bg-transparent shadow-sm p-5">
    <div className="flex flex-wrap md:flex justify-between bg-transparent">
      <div className="flex-shrink-0">
        <h1 className=" text-black flex">
          <Image
            className="mt-3 sm:w-[225px] sm:h-[250px] md:w-[260px] md:h-[260px] border-double border-[5px] border-black transition-transform duration-500 ease-in-out transform translate-x-5"
            src={profile}
            alt="profile"
            width={260}
            height={300}
          />
        </h1>
      </div>

      <div className="w-full lg:w-3/6  text-[18px]">
        <p className="w-full lg:w-11/12 text-justify">Hi, I’m
        <span className=" text-[18px] font-bold text-red-900"> Alishba Nasir</span> a passionate Front-End Developer who loves bringing designs to life with clean, responsive, and interactive web solutions. Skilled in HTML, CSS, JavaScript, and TypeScript,I specialize in creating intuitive user interfaces that deliver seamless experiences across all devices.

With hands-on experience in diverse projects, I constantly strive to improve my craft and tackle new challenges. My portfolio reflects my journey and growth as a developer, and I’m eager to continue making an impact with innovative and user-centered web applications. Thanks for visiting, and feel free to explore my work!</p>
        <button className="mt-2 rounded-3xl text-[18px] border border-black p-2  hover:bg-black text-red-900">
       <Link href="https://alishba-nasir-resume.netlify.app"> Download CV</Link>
        </button>
      </div>
    </div> 
  </div>
</div>

  );
}
