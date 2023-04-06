import React from "react";
import Navbar from "../../components/User/Navbar/Navbar";
import Profile from "../../components/User/Profile/Profile";

function ProfilePage() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="bg-third/50 pt-28">
        <Profile />
      </div>
    </>
  );
}

export default ProfilePage;
