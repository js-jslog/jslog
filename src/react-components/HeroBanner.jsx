import React from 'react';

class HeroBanner extends React.Component {
    render() {
        let img_src = "/images/hero/" + this.props.image;
        return <div id="index-banner" className="parallax-container">
            <div className="parallax"><img src={img_src} alt={this.props.hero_alt}></img></div>
        </div>
    };
}

export default HeroBanner;
