import Link from "next/link";
export default function Login() {
  return (
    <div className="p-10 bg-gradient-to-r from-blue-900 via-blue-300 to-black">
      <br />{" "}
      <div className="bg-transparent shadow-sm">
        <div className=" justify-center flex md:flex-wrap sm:flex-wrap flex-wrap">
          <div>
            <form className="p-3 md:flex-wrap sm:flex-wrap flex ">
              <label className="mt-3" htmlFor="email">
                <h1>
                  <b>Email Address:&nbsp;</b>
                </h1>
              </label>
              <input
                type="email"
                required
                className="text-center focus:outline-none  border-none border-5 border-black text-black p-1 m-1"
                id="email"
                name="email"
                placeholder="enter your email"
              />
            </form>
          </div>
        </div>

        <div className=" justify-center flex md:flex-wrap sm:flex-wrap flex-wrap">
          <div>
            <form className="p-3 md:flex-wrap sm:flex-wrap flex ">
              <label className="mt-3" htmlFor="password">
                <h1>
                  <b>
                    Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </b>
                </h1>
              </label>
              <br />
              <input
                className="text-center focus:outline-none  border-none border-5 border-black text-black p-1 m-1"
                type="password"
                name="password"
                id="password"
                placeholder="enter your password"
                required
              />
            </form>
          </div>
        </div>

        <div className="mt-3 justify-center flex md:flex-wrap sm:flex-wrap flex-wrap">
          <Link href="/">
            <button
              type="submit"
              className="border border-1 border-black hover:bg-black hover:text-white mb-5 px-5 p-2 rounded-md mx-5"
              
            >
              <b>Login</b>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
