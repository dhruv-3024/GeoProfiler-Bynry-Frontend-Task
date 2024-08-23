import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileList = ({ profiles = [] }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-3 sm:grid-cols-1 2xl:grid-cols-5 ml-4 mr-4">
      {profiles.length > 0 ? (
        profiles.map((profile) => <ProfileCard profile={profile} key={profile.id} />)
      ) : (
        <p>No profiles found.</p>
      )}
    </div>
  );
};

export default ProfileList;
