import React from "react";


const POICard = (props) => {
  return (
     <>
        {props.results[0].poi.name}
      <br />
    </>
  );
};

export default POICard;
