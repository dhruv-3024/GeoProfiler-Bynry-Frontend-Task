import React, { useEffect, useState } from "react";
import DisplayProfilesTable from "../components/admin/DisplayProfilesTable";
import { profiles } from "../Data/ProfileData"; //comment this out if data is to be fetched from backend

const AdminPanel = () => {
  // const [profiles, setProfiles] = useState([]);

  //fetching from backend
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3300/profiles");
  //       const data = await response.json();
  //       setProfiles(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching profiles:", error);
  //     }
  //   };
  //   fetchData();
  // },[]);
//   console.log(profiles);
  return (
    <div className="h-[100%]">
      <DisplayProfilesTable profiles={profiles} />
    </div>
  );
};

export default AdminPanel;
