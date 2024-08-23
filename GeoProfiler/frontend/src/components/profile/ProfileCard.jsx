import { IconMapPin } from "@tabler/icons-react";
import React, { useState } from "react";
import InteractiveMap from "../map/InteractiveMap";
import { Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";

const ProfileCard = ({ profile }) => {
  const [data, setData] = useState([]);
  const [lat, setLat] = useState(18.5204);
  const [lng, setLng] = useState(73.8567);

  const fetchData = async (query) => {
    try {
      const res = await fetch(
        `https://geocode.maps.co/search?q=${encodeURIComponent(
          query
        )}&api_key=${process.env.REACT_APP_COORD_API_KEY}`
      );
      if (!res.ok) {
        throw new Error("Error while fetching data from API");
      }
      const result = await res.json();
      setData(result);
      // console.log(data[0].lat + " "+ data[0].lon);
      // console.log("data - " + data);
      if (result.length > 0) {
        setLat(parseFloat(result[0].lat));
        setLng(parseFloat(result[0].lon));
        console.log(result[0].lat + " " + result[0].lon);
      }
    } catch (err) {
      console.log(`Error while fetching through API : ${err.message}`);
    }
  };
  const onBtnClick = (e) => {
    document.getElementById("my_modal_5").showModal();
    fetchData(profile.address);
  };

  return (
    <div className="m-4 p-4 border rounded-xl bg-gray-300 border-none hover:cursor-pointer shadow-md ">
      <div className=" p-2 flex flex-col gap-2 items-center">
        <div className=" p-2 flex flex-col gap-2 items-center">
          <Link to={`/profiles/${profile.id}`}>
            <img
              className="rounded-xl mb-3 w-[10rem] "
              src={`/images/profile/${profile.id}.png`}
              alt=""
            />
          </Link>
          <div className="text-gray-600">
            <h1 className="text-gray-700 font-semibold">{profile.name}</h1>
            <div className="flex flex-col mt-2 gap-1">
              <p>{profile.des}</p>
              <span className="flex gap-1">
                <IconMapPin className="" /> {profile.address}
              </span>
            </div>
          </div>
        </div>

        <div className="  text-gray-600 rounded-lg transition duration-200 hover:bg-slate-400 m-4 hover:shadow-lg hover:[&_button]:bg-transparent">
          {/* modal */}
          <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn border-none hover:text-gray-200 "
              onClick={onBtnClick}
            >
              Summary
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box items-center">
                <div className="flex justify items-center">
                  <InteractiveMap width="29rem" lat={lat} lng={lng} />
                  {/* {console.log(lat + " " + lng)} */}
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
