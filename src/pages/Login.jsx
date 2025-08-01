import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { loginuser, setUser } = useContext(AuthContext);
const [error, setError] =useState({});
  const location = useLocation()
  const naviget = useNavigate()
  // console.log(location)

  const handellogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    const password = e.target.password.value;

    // console.log(email, password);

loginuser(email,password)
.then( (result) => {
 const user = result.user;
// console.log(result.user)
setUser(user)
naviget(location.state ? location.state : "/")
})
.catch ( (err) => {

setError({...error , login: err.code})

})

  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-bold text-center fon pt-8">Login Your Account</h1>
        <form onSubmit={handellogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />

{

error.login && 
 <label className="label text-red-600">
             {error.login}
            </label>
}




            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center pb-7">
          Dont Have An Account?{" "}
          <Link className=" text-red-600" to={"/auth/register"}>
            Ragister
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
