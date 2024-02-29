import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import Cookies from "universal-cookie";

const cookie = new Cookies();

const Auth = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      cookie.set("auth-token", res.user.refreshToken);
      setIsAuth(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className=" items-center flex flex-col font-mono gap-10 justify-center h-screen">
        <p className=" text-4xl font-bold">Sign In With Google To Continue</p>
        <button
          onClick={signInWithGoogle}
          className="bg-green-400 p-5 rounded-lg flex items-center">
          <span className="flex items-center">
            <FcGoogle className="text-2xl" />
            <span className="ml-2">Sign In With Google</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default Auth;
