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
        window.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('resize', this.updateElementSizeCache.bind(this));
    };
    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
        window.removeEventListener('resize', this.updateElementSizeCache.bind(this));
    };
    updateElementSizeCache () {
            const header_height = getComputedStyle(this.header).height.split('px')[0];
            const nav_height = getComputedStyle(this.nav).height.split('px')[0];
            const nav_padding = getComputedStyle(this.nav).paddingTop.split('px')[0];
            const nav_total = parseFloat(nav_height) + parseFloat(nav_padding);
            this.setState({header_height: header_height});
            this.setState({nav_total: nav_total});
    };
    handleScroll (event) {
        const diff = parseFloat(this.state.header_height) - parseFloat(this.state.nav_total);
        if (window.scrollY < diff) {
            this.nav.style.position = 'fixed';
            this.nav.style.top = 0;
        }
        if (window.scrollY > diff) {
            this.nav.style.position = 'absolute';
            this.nav.style.top = diff + 'px';
        }
    };
    render () {
        const image_src = '/images/hero/' + this.props.image;
        const {classes} = this.props;
        return (
            <header ref={(header) => {this.header = header}}>
                <OverlayMenu
                    title="Joseph Sinfield"
                    navRef={nav => this.nav = nav}
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
