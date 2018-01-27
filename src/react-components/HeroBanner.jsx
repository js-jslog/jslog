import React from 'react';

import {Parallax, Background} from 'react-parallax';

class HeroBanner3 extends React.Component {
    render () {
        let image_src = '/images/hero/' + this.props.image;
        return (
            <div>
                <Parallax
                    bgImage={image_src}
                    strength={400}
                >
                    <div style={{ height: '800px' }} />
                </Parallax>
            </div>
        );
    }
};

export default HeroBanner3;
