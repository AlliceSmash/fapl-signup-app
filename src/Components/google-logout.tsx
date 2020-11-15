import React from 'react';
import { GoogleLogout } from 'react-google-login';
const clientId = "621543001578-r2snpbuprd78726i997iibjnj04f38vt.apps.googleusercontent.com"

function Googlelogout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Googlelogout;