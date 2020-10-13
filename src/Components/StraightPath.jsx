import React from "react";

function StraightPath(props) {
  const basePathStyle = {
    stroke: '#fff'
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 976 16"
      style={props.defaultSvgStyle}>
      <path
        d="M8 8L968 8"
        className="straightPath"
        style={{ ...props.defaultPathStyle, ...basePathStyle }}
        pathLength="100"
      >
      </path>
    </svg>
  );
}

export default StraightPath;
