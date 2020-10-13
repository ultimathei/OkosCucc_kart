import React, { useEffect } from 'react'
import lottie from 'lottie-web'
import animData from '../lottie-data/kart_loop_3.json'

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
    componentDidMount(){
        console.log('component mounted');

        animObject = lottie.loadAnimation({
            container: this.animBox,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: animData,
        });

        animObject.playSegments(idleLoopSegment, true);
        animObject.onSegmentStart = animObject.playSegments(idleLoopSegment, false);
    }
    updateText = (text) => {
        animObject.renderer.elements[0].updateDocumentData({t: ""+text})
    }
    playAction = ()=> {
        animObject.playSegments(actionLoopSegment, false);
        animObject.onSegmentStart = animObject.playSegments(idleLoopSegment, false);
    }
    getNewValue(){
        return ++count;
    }

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
