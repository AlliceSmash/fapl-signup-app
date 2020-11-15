import React from "react";
import  {GoogleLogin, UseGoogleLoginProps} from "react-google-login";

const clientId = "621543001578-r2snpbuprd78726i997iibjnj04f38vt.apps.googleusercontent.com"

function Googlelogin() {
  const onSuccess = (res : any) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n `
    );
   // refreshTokenSetup(res);
  };

  const onFailure = (res : any) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 `
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Log in with Google account"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={false}
      />
    </div>
  );
}

export default Googlelogin;