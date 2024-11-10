import Link from "next/link";
import profile from "../app/public/images/profile.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-300 to-black p-10 ">
      <div className="bg-transparent shadow-sm p-5 flex-wrap flex justify-between ">
        <div className="mt-4 font-bold text-3xl ">
          
          <b>
            <h1 className="leading-normal">
              Hi, I&apos;m <span className="text-red-900">Alishba Nasir,</span> <br />
              a passionate <span className="text-red-900">Front-end</span> Developer,
            </h1>
          </b>
          <h3 className="text-base mt-2 leading-relaxed">
          With a focus on creating responsive and engaging user interfaces, <br /> I’ve worked on various projects that showcase my skills in HTML, CSS,<br /> JavaScript, and more.
          </h3>
          <button className="mt-3 rounded-full text-lg p-2 my-3  hover:bg-black border border-black text-red-900">
            <Link href="/about"> Here me </Link>
          </button>
          <button className="mt-3 rounded-full text-lg hover:bg-black border border-black p-2 m-1 hover:text-white text-black">
           <Link href="/contactus">Contact me</Link> 
          </button>
          <div className="flex">
            <p className="m-2 hover:bg-red-900">
              <Link href="https://www.linkedin.com/in/alishba-nasirr/">
              <Image
                  src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png"
                  width={30}
                  alt=""
                />
              </Link>
            </p>
            <p className="m-2 hover:bg-red-900">
              <Link href="https://www.facebook.com/alishba.nasir.167">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/1051/1051309.png"
                  width={30}
                  alt=""
                />
              </Link>
            </p>
            <p className="m-2 hover:bg-red-900">
              <Link href="https://github.com/alishbanasir">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png"
                  width={30}
                  alt=""
                />
              </Link>
            </p>
          </div>
        </div>
        <div className="border-double border-[5px] border-black">
          <Image className=" shadow-transparent" src={profile} alt="profile" width={300} />
        </div>
      </div>
      


















      </div>
    
  );
}
