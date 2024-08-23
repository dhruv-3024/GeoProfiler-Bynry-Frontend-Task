import React, { useState, useEffect } from "react";
import ProfileList from "../components/profile/ProfileList";
import { profiles } from "../Data/ProfileData";

const ProfilesPage = () => {

  const [searchQuery, setSearchQuery] = useState("");
  // const [profiles, setProfiles] = useState([]); //while fetching from backend use this
  // const [filteredProfiles, setFilteredProfiles] = useState([]);//while fetching from backend use this
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);//while fetching from js file use this

  // search query
  const displayProfiles = (query = searchQuery) => {
    setFilteredProfiles(
      profiles.filter((profile) =>
        profile.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const displayAll = ()=>{
    setFilteredProfiles(profiles);
  }

  const searchByLocation = (query = searchQuery) => {
    setFilteredProfiles(
      profiles.filter((profile) =>
        profile.address.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  // fetching data from backend 
  // useEffect(() =>{
  //   const fetchData = async()=>{
  //     const response = await fetch("http://localhost:3300/profiles");
  //     const data = await response.json();
  //     setProfiles(data);
  //     setFilteredProfiles(data);
  //     // console.log(data);
  //   }
  //   fetchData();
  // },[]);
  // automatically updates when change are made to searchQuery
  useEffect(() => {
    displayProfiles(searchQuery);
    // searchByLocation(searchQuery);
  }, [searchQuery]);

  // Filter by category
  const filterByCategory = (role) => {
    if (role === "All") {
      setFilteredProfiles(profiles);
    } else {
      setFilteredProfiles(profiles.filter((profile) => profile.role === role));
    }
  };

  // unique roles available to display in dropdown for filter
  const uniqueRoles = new Set(
    profiles.map((profile) => profile.role).filter((role) => role !== "")
  );
  // console.log(rolesAvailable);
  const rolesAvailable = [...uniqueRoles];
  return (
    <div className="mt-14">
      {/* Search and Filter */}
      <div className="flex flex-col-reverse justify-stretch items-center align-baseline ">
           {/* filter by role or position */}
           <div className="flex flex-row  justify-start md:items-center md:gap-8 gap-4 flex-wrap mt-4">
          <button className="btn m-1 border bg-gray-200 hover:bg-gray-300" onClick={() => filterByCategory("All") }>View All</button>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 bg-gray-200 hover:bg-gray-300">
              Positions
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              {rolesAvailable.map((role,index)=>{
                return <li key={index} className="menu-item hover:bg-slate-200 hover:cursor-pointer"
                onClick={()=>filterByCategory(role)}
                >{role}</li>
              })}
            </ul>
          </div>
        </div>
        <div>
          
          {/* search by name  */}
          <label className="input input-bordered flex items-center gap-2 w-[20rem]">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input grow"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search By Name"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>

          {/* search by location */}
          {/* <label className="input input-bordered flex items-center gap-2">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input grow"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search By Location"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label> */}
          {/* filter by location */}

          {}
        </div>
         
      </div>
      {/* Profiles */}
      <ProfileList profiles={filteredProfiles} />
    </div>
  );
};

export default ProfilesPage;
