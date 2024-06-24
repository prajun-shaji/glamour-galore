import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const HandleRegister = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* LOGO */}
      <Link to="/">
        <div className="bg-white py-3 text-center font-black sm:text-3xl xl:text-5xl">
          GLAMOUR GALORE
        </div>
      </Link>
      {/* REGISTER CARD */}
      <section className="flex h-full w-full items-center justify-center bg-gray-50">
        {/* REGISTER CONTAINER */}
        <div className="flex max-w-3xl items-center rounded-2xl bg-gray-100 p-5 shadow-lg">
          {/* IMAGE CONTAINER */}
          <div className="hidden w-1/2 p-5 md:block">
            <img
              className="rounded-2xl"
              src="https://img.freepik.com/free-photo/scene-with-miscellaneous-items-being-sold-yard-sale-bargains_23-2151216764.jpg?w=360"
            />
          </div>
          {/* FORM */}
          <div className="px-8 md:w-1/2">
            <h2 className="text-2xl font-bold">SIGN UP</h2>
            <p className="mt-4 text-sm">Create your new account here.</p>
            <form className="flex flex-col gap-4">
              <label className="mt-8 flex flex-col text-sm">
                Enter your email:
                <input
                  className="mt-1 rounded-xl border p-2 focus:outline-none"
                  type="text"
                  placeholder="example@gmail.com"
                  required
                  autoComplete="off"
                />
              </label>
              <label className="flex flex-col text-sm">
                Enter your password:
                <input
                  className="rounded-xl border p-2 focus:outline-none"
                  type="password"
                  placeholder="password"
                  required
                  autoComplete="off"
                />
              </label>
              <div className="flex items-center justify-center">
                <p className="inline-block text-xs">
                  <input type="checkbox" required /> By logging in, you agree to
                  our <strong>Terms and Conditions</strong> and
                  <strong> Privacy Policy</strong>.
                </p>
              </div>
              <button
                onClick={(e) => HandleRegister(e)}
                type="submit"
                className="rounded-2xl bg-green-500 py-2 font-medium text-white duration-100 active:bg-green-600"
              >
                REGISTER
              </button>
            </form>
            <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>

            {/* LOGIN */}
            <div className="space-x- mt-3 flex items-center justify-center text-sm">
              <p className="pr-3 font-medium">Already have an account?</p>
              <Link to="/login">
                <button className="rounded-xl bg-green-500 px-5 py-2 font-medium text-white duration-200 active:bg-green-600">
                  LOGIN
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
