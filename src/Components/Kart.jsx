import React from 'react'
import lottie from 'lottie-web'
import animData from '../lottie-data/kart_loop.json'

const animBoxStyle = {
    height: '400px',
    width: '400px',
};

const buttonStyle = {
    height: '40px',
    borderRadius: '20px',
    border: 'none',
    backgroundColor: 'black',
    color: 'white',
    padding: '0 20px',
    textTransform: 'uppercase',
    margin: '10px',
    cursor: 'pointer',
};

let animObject = null;
let count = 0;
let idleLoopSegment = [0,60];
let actionLoopSegment = [120, 180];

class Kart extends React.Component {
    // initialisation when ready
    componentDidMount(){
        console.log('component mounted');

        // create an anim object using lottie from lottie-web
        // passing in an options object
        animObject = lottie.loadAnimation({
            container: this.animBox,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: animData,
        });

        // start by playing the first loop
        // true means jump to start straight away
        animObject.playSegments(idleLoopSegment, true);
        
        // event listener, if playback reaches a segment start
        // play indle loop
        // false means, it will finish the loop then jump to start
        animObject.onSegmentStart = animObject.playSegments(idleLoopSegment, false);
    }
    // updating the text inside the bubble
    // for this I need to seelect the text object manually (.renderer.elements[0])
    // @prop text the new value
    updateText = (text) => {
        animObject.renderer.elements[0].updateDocumentData({t: ""+text})
    }
    // play the second loop once, then jump back to first loop
    playAction = ()=> {
        animObject.playSegments(actionLoopSegment, false);
        animObject.onSegmentStart = animObject.playSegments(idleLoopSegment, false);
    }
    // increment count
    getNewValue(){
        return ++count;
    }

    // the render function to generate html
    render(){
        return (
            <>
                <div style={animBoxStyle} ref={ ref => this.animBox = ref }></div>
                <button onClick={()=>this.updateText(this.getNewValue())} style={buttonStyle}>Add To Cart</button>
                <button onClick={()=>this.playAction()} style={buttonStyle}>Play Action</button>
            </>
        )
    }
}

export default Kart;
