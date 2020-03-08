import React from "react";
import axios from "axios";
import SEO from "../../components/seo";
import { GoogleLogin } from "react-google-login";
const LOGIN_URI =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8888/api/v1/me/login"
    : "http://faceform:8888/api/v1/me/login";

const Login: React.FC<any> = () => {
  const login = async (response: any) => {
    const headers = {
      Authorization: `${response.tokenId}`,
      "Content-Type": "application/json"
    };
    try {
      const res = await axios({ method: "post", url: LOGIN_URI, headers });
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("name", res.data.name);
      localStorage.setItem("image_url", res.data.image_url);
      window.location.reload();
    } catch (err) {
      console.warn(err.message);
    }
  };
  const handleError = (res: any): void => {
    console.log(res);
  };

  return (
    <section id="login" className="page-container">
      <SEO
        title="Log in | Faceform"
        description="Log in to your spotidy profile"
      />
      <div id="logo">
        <h1>Spotify</h1>
      </div>
      <GoogleLogin
        redirectUri="https://faceform.netlify.com/login"
        clientId="723845828891-kp7frfncrraifplnm633b19u6r3t9rro.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={login}
        onFailure={handleError}
        cookiePolicy={"single_host_origin"}
      />
    </section>
  );
};
export default Login;
