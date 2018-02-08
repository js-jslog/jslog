import React from 'react';
import {withStyles} from 'material-ui/styles';

import {Parallax, Background} from 'react-parallax';

const styles = theme => ({
    banner_height: {
        height: theme.scales.primary.p7,
        [theme.breakpoints.up('sm')]: {
            height: theme.scales.primary.p8,
        },
        [theme.breakpoints.up('md')]: {
            height: theme.scales.primary.p8,
        },
        [theme.breakpoints.up('lg')]: {
            height: theme.scales.primary.p8,
        },
        [theme.breakpoints.up('xl')]: {
            height: theme.scales.primary.p9,
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
                <div className={classes.banner_height}/>
            </Parallax>
        </div>
    );
};

export default withStyles(styles)(HeroBanner);
