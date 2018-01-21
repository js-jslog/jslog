import React from 'react';

import {Parallax} from 'react-scroll-parallax';

class HeroBanner extends React.Component {
    render() {
        let style = {
            backgroundImage: "url('/images/hero/" + this.props.image + "')",
            height: "800px",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "white",
            textAlign: "center",
        };
        let overlayText = this.props.overlayText || "";
        return <Parallax
            className="custom-class"
            offsetYMax={0}
            offsetYMin={0}
        >
            <div style={style}>{overlayText}</div>
        </Parallax>
    };
};

export default HeroBanner;
