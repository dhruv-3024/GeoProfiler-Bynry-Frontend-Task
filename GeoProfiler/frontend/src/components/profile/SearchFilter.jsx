import React from "react";

const SearchFilter = ({ profiles }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [profilesList, setProfilesList] = useState(profiles);
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  const displayProfiles = () =>{
    setFilteredProfiles(profilesList.filter(profile => profile.name.toLowerCase().includes(searchQuery.toLowerCase())));
  }
  return (
    <div>
      <input
        type="search"
        name="search-form"
        id="search-form"
        className="search-input"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search user"
      />
      <button className="btn btn-primary" onClick={displayProfiles}>Search</button>
    </div>
  );
};

export default SearchFilter;
