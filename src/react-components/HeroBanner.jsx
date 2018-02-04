import React from 'react';
import {withStyles} from 'material-ui/styles';

import {Parallax, Background} from 'react-parallax';

const styles = theme => ({
    banner_height: {
        height: theme.layout.banner_image_height_xs,
        [theme.breakpoints.up('sm')]: {
            height: theme.layout.banner_image_height_sm,
        },
        [theme.breakpoints.up('md')]: {
            height: theme.layout.banner_image_height_md,
        },
        [theme.breakpoints.up('lg')]: {
            height: theme.layout.banner_image_height_lg,
        },
        [theme.breakpoints.up('xl')]: {
            height: theme.layout.banner_image_height_xl,
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
