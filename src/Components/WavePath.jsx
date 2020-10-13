import React from 'react'
import { useSpring, animated } from 'react-spring';

const WavePath = (props) => {
  const springProps = useSpring({
    strokeDashoffset: 100 - props.endingPos, //offset is invert
    from: { strokeDashoffset: 100 - props.endingPos }, //offset is invert
    config: {
      duration: 1000,
      //easing: easing 
    }
  });
  
  return (
    <>
      <path
        d={props.pathData}
        className="linePath base"
        pathLength="100"
        style={{ ...props.defaultPathStyle, ...props.basePathStyle }}
      ></path>
      <animated.path
        d={props.pathData}
        className="linePath overlay"
        pathLength="100"
        style={{ 
          ...props.defaultPathStyle, 
          ...props.overlayedPathStyle, 
          ...springProps 
        }}
      ></animated.path>
    </>
  )
}

export default WavePath
