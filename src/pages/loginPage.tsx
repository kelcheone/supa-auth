import { useNavigate } from "react-router-dom";
import "../index.css";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../config/supabaseClient";

const Login = () => {
  const navigate = useNavigate();
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN") {
      navigate("/success");
    } else {
      navigate("/");
    }
  });
  return (
    <div className="bg-black h-screen">
      <header className="flex justify-center items-center min-h-screen bg-gray-800 text-white">
        <div className="sm:w-1/2 lg:w-1/3 border-2 border-gray-700 rounded-lg p-4">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              style: {
                button: { background: "#1e1e1e", color: "white" },
              },
              variables: {
                default: {
                  space: { socialAuthSpacing: "0px" },
                  colors: {
                    brand: "#1a1a1a",
                    inputLabelText: "white",
                    inputBackground: "#1a1a1a",
                    anchorTextColor: "white",
                  },
                },
              },
            }}
            theme="dark"
            socialLayout="horizontal"
            providers={[
              // "github",
              "discord",
              // "google",
              // "twitter",
              // "facebook",
              // "apple",
              // "bitbucket",
            ]}
          />
        </div>
      </header>
    </div>
  );
};

export default Login;
