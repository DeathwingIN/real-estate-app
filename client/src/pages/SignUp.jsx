
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({});

  //Error handling
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //navigate to sign in page
  const navigate = useNavigate();

  //handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh

    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      //change data to jason
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      //navigate to sign in page
      navigate('/sign-in');
      
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1
        className="text-3xl text-center font-semibold 
      my-7"
      >
        Sign up
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="Email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95
        disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>

        <OAuth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an Account</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>

      {/* Show error message if error is not null */}
      {error && <div className="text-red-500 text-center mt-5">{error}</div>}
    </div>
  );
}
