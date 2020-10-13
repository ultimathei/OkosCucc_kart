import React from "react";
import { easePolyInOut as easing } from 'd3-ease'
import WavePath from "./WavePath";
//TRY diffferent easing methods: https://www.npmjs.com/package/d3-ease
const overlayedPathStyle = {
  stroke: 'url(#grad2)'
}
const basePathStyle = {
  stroke: 'rgb(43, 43, 43)',
  strokeWidth: '14px'
}
const circleStyle = {
  stroke: "rgb(43, 43, 43)",
  strokeLinecap: 'round',
  strokeMiterlimit: '10',
  strokeWidth: '14px',
  strokeDashoffset: '0',
  strokeDasharray: '100'
}
/**
 * 
 * @param {*} props 
 */
function Wave(props) {
  const getStrokeOffset = (min, max) => {
    if (props.endingPos > min && props.endingPos < max) {
      return {
        strokeDashoffset:
          100 - ((props.endingPos - min) * (100 / (max - min)))
      }
    }
    else if (props.endingPos >= max)
      return { strokeDashoffset: "0" }
  }

  return (
    <svg
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1029 111.65">
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "rgb(255,0,50)", stopOpacity: "1" }} />
          <stop offset="100%" style={{ stopColor: "rgb(255,255,150)", stopOpacity: "1" }} />
        </linearGradient>
      </defs>

      <WavePath
        pathData="M8 35.92c241.27-58.3 277.27 119.2 455.5 52.5 28.62-10.71 75.41-42.86 104-56 37-17 83.17-30 164-22 111 11 147.5 68.5 289.5 40.5"
        defaultPathStyle={props.defaultPathStyle}
        basePathStyle={basePathStyle}
        overlayedPathStyle={overlayedPathStyle}
        endingPos={props.endingPos}
      />

      <WavePath
        pathData="M225.24,49.94a21.39,21.39,0,1,1-.05.1"
        defaultPathStyle={circleStyle}
        basePathStyle={{ fill: "rgb(6, 13, 53)" }}
        overlayedPathStyle={{
          fill: "none",
          stroke: "url(#grad2)",
          strokeWidth: "16px",
          strokeDashoffset: "100"
        }}
        endingPos={props.endingPos}
      />

      <WavePath
        pathData="M664,-4.09a42.2,42.2,0,1,1-.06.15"
        defaultPathStyle={circleStyle}
        basePathStyle={{ fill: "rgb(6, 13, 53)" }}
        overlayedPathStyle={{
          fill: "none",
          stroke: "url(#grad2)",
          strokeWidth: "16px",
          strokeDashoffset: "100"
        }}
        endingPos={props.endingPos}
      />


{/*
      <path pathLength="100"
        style={{ ...circleStyle, fill: "rgb(6, 13, 53)" }}
        d="M225.24,49.94a21.39,21.39,0,1,1-.05.1" />
      <animated.path pathLength="100"
        style={{
          ...circleStyle,
          fill: "none",
          stroke: "url(#grad2)",
          strokeWidth: "16px",
          strokeDashoffset: "100",
          ...getStrokeOffset(21, 25)
        }}
        d="M225.24,49.94a21.39,21.39,0,1,1-.05.1" />

      <path pathLength="100"
        style={{ ...circleStyle, fill: "rgb(6, 13, 53)" }}
        d="M664,-4.09a42.2,42.2,0,1,1-.06.15" />
      <animated.path pathLength="100"
        style={{
          ...circleStyle,
          fill: "none",
          stroke: "url(#grad2)",
          strokeWidth: "16px",
          strokeDashoffset: "100",
          ...getStrokeOffset(66, 72)
        }}
        d="M664,-4.09a42.2,42.2,0,1,1-.06.15" />
      */}
    </svg>
  );
}

export default Wave;