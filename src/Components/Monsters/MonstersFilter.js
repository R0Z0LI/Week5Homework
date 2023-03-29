import React from "react";

const MonstersFilter = (props) => {
  const onChangeHandler = (event) => {
    props.typed(event.target.value);
  };
  return (
    <input tpye="text" placeholder="Search.." onChange={onChangeHandler} />
  );
};

export default MonstersFilter;
