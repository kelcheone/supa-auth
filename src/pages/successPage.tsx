import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [user, setUser] = useState({});
  const navigage = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        }
      });
    };
    getUserData();
  }, []);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    navigage("/");
  };
  return (
    <div className="bg-gray-900 h-screen text-white w-full flex justify-evenly items-center flex-col">
      {Object.keys(user).length !== 0 ? (
        <>
          <button className="bg-gray-800 p-2 rounded-lg" onClick={signOut}>
            {" "}
            Sign Out{" "}
          </button>
          <div className="flex flex-col justify-center items-center">
            <h2>Success</h2>
          </div>
        </>
      ) : (
        <>
          <h2>User is not logged in</h2>
          <button
            className="bg-gray-800 p-2 rounded-lg"
            onClick={() => navigage("/")}
          >
            {" "}
            Go to Login{" "}
          </button>
        </>
      )}
    </div>
  );
};

export default Success;
