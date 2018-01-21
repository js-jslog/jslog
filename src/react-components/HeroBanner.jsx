import React from 'react';

import {Parallax} from 'react-scroll-parallax';

class HeroBanner extends React.Component {
    render() {
        let style = {
            "background-image": "url('/images/hero/" + this.props.image + "')",
            "height": "800px",
            "background-attachment": "fixed",
            "background-position": "center",
            "background-repeat": "no-repeat",
            "background-size": "cover",
        };
        return <Parallax
            className="custom-class"
            offsetYMax={-10}
            offsetYMin={0}
        >
            <div style={style}></div>
        </Parallax>
    };
};

export default HeroBanner;
