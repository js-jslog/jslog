import React from 'react';
import {withStyles} from 'material-ui/styles';

import {Parallax, Background} from 'react-parallax';

const styles = theme => ({
    image: {
        height: '400px',
    },
    [theme.breakpoints.up('md')]: {
        image: {
            height: "800px",
        },
    },
});

const HeroBanner = function (props) {
    const image_src = '/images/hero/' + props.image;
    const {classes} = props;
    return (
        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={image_src}
                strength={200}
            >
                <div className={classes.image}/>
            </Parallax>
        </div>
    );
};

export default withStyles(styles)(HeroBanner);
