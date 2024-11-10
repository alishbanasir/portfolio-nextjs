import Image from "next/image";
import Link from "next/link";
import image from "../public/images/image.png";
import olx from "../public/images/olx.png";
import resume from "../public/images/resume.png";

export default function Career() {
    return (
      <div className="p-10 bg-gradient-to-r from-blue-900 via-blue-300 to-black">
      <div className="p-5 bg-transparent shadow-sm">
<div className="flex  sm:flex-wrap md:flex-wrap flex-wrap gap-10">


<div className="w-full sm:w-[100%] md:w-[45%] lg:w-[30%] lg:h-[35%] box-border h-[280px] sm:h-[230px] md:h-[230px] bg-transparent">
    <div className="box-border bg-black  h-[280px] md:h-[230px] sm:h-[230px] shadow-2xl w-full">
      <div className="flex relative">
        <Link href="https://cosmetics-website.netlify.app/">
          <Image src={require('../public/images/image.png'

          )} className="p-1 w-full absolute  h-[230px] object-fill" width={1000}  alt="image" />
          </Link>
          <div className="w-full p-5 opacity-0 bg-black text-white hover:opacity-100 relative h-[230px]">
            <h1 className="tracking-widest  font-bold text-white text-[20px] mb-1">Cosmetics Website</h1>
            <p className="leading-relaxed text-[13px] ">
            A stylish and responsive cosmetics website designed to showcase products with elegance and functionality. Created with HTML and CSS, this site delivers a smooth, user-friendly shopping experience. Discover beauty redefined!</p>
            <p className="leading-relaxed text-[18px] hover:underline text-blue-700"><Link href="https://cosmetics-website.netlify.app/">View Project</Link></p>
          </div>
      </div>
      </div>
</div>

<div className="w-full sm:w-[100%] md:w-[45%] lg:w-[30%] lg:h-[35%] box-border h-[280px] sm:h-[230px] md:h-[230px] bg-transparent">
    <div className="box-border  h-[280px] md:h-[230px] sm:h-[230px] shadow-2xl w-full">
      <div className="flex relative">
        <Link href="https://olxweb-site.netlify.app/">
          <Image src={require('../public/images/olx.png'

          )} className="w-full absolute  h-[230px] object-fill" width={1000}  alt="image" />
          </Link>
          <div className="w-full p-5 opacity-0  bg-black text-white hover:opacity-100 relative h-[230px]">
            <h1 className="tracking-widest  font-bold  text-white text-[20px] mb-1">OLX Clone</h1>
            <p className="leading-relaxed text-[13px] ">A responsive OLX-inspired website built using HTML, CSS, and Bootstrap. This project showcases a clean, user-friendly design with essential OLX features, focusing on layout and styling to provide a seamless browsing experience.</p>
            <p className="leading-relaxed text-[18px] hover:underline text-blue-700"><Link href="https://olxweb-site.netlify.app/">View Project</Link></p>
          </div>
      </div>
      </div>
</div>






<div className="w-full sm:w-[100%] md:w-[45%] lg:w-[30%] lg:h-[35%] box-border h-[280px] sm:h-[230px] md:h-[230px] bg-transparent">
    <div className="box-border   h-[280px] md:h-[230px] sm:h-[230px] shadow-2xl w-full">
      <div className="flex relative">
        <Link href="https://alish-resume-generator.netlify.app/">
          <Image src={require('../public/images/resume.png'

          )} className=" w-full absolute  h-[230px] object-fill" width={1000}  alt="image" />
          </Link>
          <div className="w-full p-5 opacity-0 bg-black text-white hover:opacity-100 relative h-[230px]">
            <h1 className="tracking-widest  font-bold text-white text-[20px] mb-1">Resume Generator</h1>
            <p className="leading-relaxed text-[13px] ">Create a professional resume in minutes! Fill out your details, preview, and download your resume in a ready-to-share PDF format. Quick, easy, and customizable for job applications or portfolio updates.

</p>
            <p className="leading-relaxed text-[18px] hover:underline text-blue-700"><Link href="https://alish-resume-generator.netlify.app/">View Project</Link></p>
          </div>
      </div>
      </div>
</div>


















  <div className="bg-gradient-to-r from-blue-900 via-blue-300 to-black w-full"></div>
</div>

</div>
</div>


















  































    );
  }
  