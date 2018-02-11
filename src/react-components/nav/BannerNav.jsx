import React from 'react';
import {withStyles} from 'material-ui/styles';
import OverlayMenu from './OverlayNav.jsx';

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

class BannerNav extends React.Component {
    componentDidMount () {
        this.updateElementSizeCache();
        window.addEventListener('resize', this.updateElementSizeCache.bind(this));
    };
    componentWillUnmount () {
        window.removeEventListener('resize', this.updateElementSizeCache.bind(this));
    };
    updateElementSizeCache () {
        const header_height = getComputedStyle(this.header).height.split('px')[0];
        this.setState({header_height: header_height});
    };
    render () {
        const image_src = '/images/hero/' + this.props.image;
        const {classes} = this.props;
        const container_height = this.state && this.state.header_height;
        return (
            <header ref={(header) => {this.header = header}}>
                <OverlayMenu
                    title="Joseph Sinfield"
                    container_height={container_height}
                />
                <Parallax
                    bgImage={image_src}
                    strength={200}
                >
                    <div className={classes.banner_height}/>
                </Parallax>
            </header>
        );
    };
};

export default withStyles(styles)(BannerNav);
