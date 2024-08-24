import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { profiles } from "../../Data/ProfileData";

const ProfileDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    setProfile(profiles.find((profile) => profile.id === parseInt(id)));
  }, id);
  return (
    <div className="max-h-screen mb-16">
      <div className=" mt-5 mx-auto rounded-lg p-5 bg-white max-w-4xl">
        <hr className="h-[2px] bg-gray-600" />

        <div className="sm:flex sm:items-center px-6 py-4 w-full">
          <img
            className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-24 rounded-full"
            src={`/images/profile/${profile.id}.png`}
            alt={`${profile.name}'s photo`}
          />
          <div className="pl-5 flex flex-col lg:flex-row w-full">
            <div className="w-full lg:w-2/3">
              <h2 className="text-xl font-bold">{profile.name}</h2>
              <h4 className="font-semibold">{profile.role}</h4>
              <p className="text-gray-600">{profile.des}</p>
            </div>
            <div className="lg:ml-32 mt-4 lg:mt-0 w-full lg:w-1/3">
              <h2 className="text-lg font-bold">Contact Me</h2>
              <p className="text-gray-600 break-words">
                <span className="font-semibold text-gray-600">Mobile : </span>
                {profile.contact}
              </p>
              <p className="text-gray-600 break-words">
                <span className="font-semibold text-gray-600">Email : </span>
                {profile.email}
              </p>
              <p className="text-gray-600 break-words">
                <span className="font-semibold text-gray-600">LinkedIn : </span>
                {profile.linkedIn}
              </p>

              <p className="text-gray-600">
                <span className="font-semibold text-gray-600 break-words">Address : </span>
                {profile.address}
              </p>
            </div>
          </div>
        </div>
        <hr className="h-[1px] bg-gray-600" />
        {/* lorem text */}
        <div className="mt-4 mb-4">
          <h2 className="text-lg font-bold">About Me</h2>
          <p className="text-gray-600 break-words">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            consequatur reiciendis possimus quia, nam deserunt. Illo, natus.
            Quos fuga laboriosam assumenda, iste aliquid amet aspernatur
            dignissimos minus officia sapiente, quam necessitatibus error soluta
            quae iusto modi eaque earum libero deleniti magnam alias quas id
            itaque! Rerum expedita assumenda impedit sit?
          </p>
          <p className="text-gray-600 break-words">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
            laudantium ducimus! Porro totam quia natus deleniti rem ea vitae
            expedita quis voluptate, recusandae ab aspernatur, in eaque
            asperiores, commodi alias labore inventore iusto. Similique nemo
            incidunt obcaecati suscipit, animi possimus voluptatem repellendus
            nesciunt vero beatae recusandae, at molestiae soluta expedita?
          </p>
        </div>
        <hr className="h-[1px] bg-gray-600" />
        {/* interest */}
        <div>
          <h2 className="text-lg font-bold">My Interests</h2>
          <div className="flex flex-wrap mt-2">
            {profile.interests?.map((interest, index) => (
              <span
                key={index}
                className="inline-block bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
