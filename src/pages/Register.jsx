import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { creatNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState({});

const naviget = useNavigate()

  const handelRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;

    if (name.length < 5) {
      setError({ ...error, name: "miust be more tha 5 charaxter long" });
    }

    const photourl = e.target.photourl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(name, photourl, email, password);

    creatNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

updateUserProfile({displayName:name, photoURL:photourl})
.then ( () => {
naviget("/")

}).catch ( err => {

// console.log(err)

})

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handelRegister} className="card-body">
          <h2 className="text-center font-bold">Register Your account</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name "
              className="input input-bordered"
              required
            />

            {error.name && (
              <label className="label text-red-700">{error.name}</label>
            )}

            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your PhotoURL"
              name="photourl"
              className="input input-bordered"
              required
            />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
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
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center pb-7">
          Dont Have An Account?{" "}
          <Link className=" text-red-600" to={"/auth/login"}>
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
