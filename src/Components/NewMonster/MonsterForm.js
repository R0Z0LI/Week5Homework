import React from "react";
import arrow from "./Icons/arrow-left.svg";

const MonsterForm = () => {
  return (
    <form>
      <div className="new-monster">
        <img src={arrow} alt="arrow-left" />
      </div>
    </form>
  );
};

export default MonsterForm;
