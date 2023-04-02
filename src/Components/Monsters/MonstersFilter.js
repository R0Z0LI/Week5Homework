import React from "react";
import "./MonstersFilter.modul.css";

const MonstersFilter = (props) => {
  const onChangeHandler = (event) => {
    props.typed(event.target.value);
  };
  return (
    <div>
      <h3>Monsters</h3>
      <input
        tpye="text"
        placeholder="Search.."
        className="searchBar"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default MonstersFilter;
