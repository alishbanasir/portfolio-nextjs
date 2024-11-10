import Link from "next/link";
export default function Signup(){
    return(
        <div className="p-10 bg-gradient-to-r from-blue-900 via-blue-300 to-black">
         <br /> <div className="bg-transparent shadow-sm">
            <div className=" justify-center flex md:flex-wrap sm:flex-wrap flex-wrap">
  
    <form className="p-3 flex md:flex-wrap sm:flex-wrap  ">
      <label className="mt-3" htmlFor="text"><h1><b>First  Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h1></label>
    <input className="text-center focus:outline-none border-none border border-5 border-black  text-black p-1 m-1" type="text" name="text" id="text" placeholder="enter your firstname" required/> 
    </form>
    </div>
    <div className=" justify-center flex md:flex-wrap sm:flex-wrap flex-wrap">
    <form className="p-3 md:flex-wrap sm:flex-wrap flex  ">
      <label className="mt-3" htmlFor="text"><h1><b>Last  Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h1></label>
    <input className="text-center focus:outline-none border-none border-5 border-black text-black p-1 m-1" type="text" name="text" id="text" placeholder="enter your lastname" required/> 
    </form>
    </div>
    

    <div className=" justify-center flex md:flex-wrap sm:flex-wrap flex-wrap">
    <form className="p-3 md:flex-wrap sm:flex-wrap flex ">
      <label className="mt-3" htmlFor="number"><h1><b>Phone Number:&nbsp; &nbsp;</b></h1></label>
    <input className="text-center focus:outline-none border-none border-5 border-black text-black p-1 m-1" type="number" name="number" id="number" placeholder="enter your number" required/>
    </form>
    </div>
    <div className=" justify-center flex md:flex-wrap sm:flex-wrap flex-wrap">
    <form className="p-3 md:flex-wrap sm:flex-wrap flex ">
      <label className="mt-3" htmlFor="email"><h1><b>Email Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h1></label>
    <input className="text-center focus:outline-none border-none border-5 border-black text-black p-1 m-1" type="email" name="email" id="email" placeholder="enter your email" required/> 
    </form>
    </div>
    <div className=" justify-center flex md:flex-wrap sm:flex-wrap flex-wrap">
    <form className="p-3 md:flex-wrap sm:flex-wrap flex ">
     <label className="mt-3" htmlFor="email"><h1><b>Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h1></label><br />
    <input className="text-center focus:outline-none border-none border-5 border-black text-black p-1 m-1" type="password" name="password" id="password" placeholder="enter your password" required/>
    </form>
    </div>
    <div className="mt-2  justify-center flex md:flex-wrap sm:flex-wrap flex-wrap">
    <Link href="/"><button className="border border-1 border-black hover:bg-black mb-5 hover:text-white px-5 p-2 rounded-md mx-5" type="submit"><h1><b>SignUp</b></h1></button></Link>

    </div>
    </div>
    </div>
    
          
    )
}