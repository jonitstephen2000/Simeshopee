import React from "react";
import "./UserLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../Redux/UserSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";


function UserSiginUp() {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, ResetPassword] = useState("");
  const dispatch = useDispatch();

  //  const nav= new useNavigate()

  console.log(typeof setUser);

  // const handleSignUp = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post("http://localhost:3001/signup", {
  //       Name,
  //       Email,
  //       password,
  //     });

  //     console.log(response.data);

  //     dispatch(
  //       setUser({
  //         Name: Name,
  //         Email: Email,
  //         password: password,
  //       })
  //     );

  //     navigate("/login");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
const handleSignUp=()=>{



  if (password !== repassword) {
    alert("Passwords do not match");
  } else if (Name === "") {
    alert("Please fill in the Name field");
  } else if (Email === "") {
    alert("Please fill in the Email field");
  } else if (password === "") {
    alert("Please fill in the Password field");
  } else {
    dispatch(
      setUser({
        Name: Name,
        Email: Email,
        password: password
      })
    );
    navigate("/login");
  }
};
  return (
    <div className="full">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form onSubmit={handleSignUp}>
          <label className="labels" aria-hidden="true">
            Sign up
          </label>
          <input
            className="inputs"
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="User name"
            required
          />
          <input
            className="inputs"
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            className="inputs"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <input
            className="inputs"
            type="password"
            placeholder="Re-Password"
            value={repassword}
            onChange={(e) => ResetPassword(e.target.value)}
            required
          />
          <button className="buttonss" onSubmit={handleSignUp}>
            Sign up
          </button>
          <Link
            style={{
              color: "#bdbdbd",
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              marginBottom: "50px",
            }}
            to={"/Login"}
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default UserSiginUp;
