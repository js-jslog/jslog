import React from 'react';
import {withStyles} from 'material-ui/styles';
import OverlayMenu from './OverlayNav.jsx';

import {Parallax, Background} from 'react-parallax';

const styles = theme => ({
    banner_height: {
        height: theme.scales.primary.p8,
        [theme.breakpoints.up('sm')]: {
            height: theme.scales.primary.p9,
        },
    },
    trans_overlay: {
        content: " ",
        zIndex: theme.zIndex.appBar,
        display: 'block',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        background: theme.palette.background.paper,
        opacity: '0',
    },
});

class BannerNav extends React.Component {
    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('resize', this.updateElementSizeCache.bind(this));
        this.updateElementSizeCache();
        this.trans_overlay.style.background = this.props.background_colour;
    };
    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
        window.removeEventListener('resize', this.updateElementSizeCache.bind(this));
    };
    updateElementSizeCache () {
        const header_height = getComputedStyle(this.header).height.split('px')[0];
        this.setState({header_height: header_height});
    };
    handleScroll (event) {
        const h = this.state.header_height;
        const y = window.scrollY;
        this.trans_overlay && (this.trans_overlay.style.opacity = y/h);
    };
    render () {
        const image_src = '/images/hero/' + this.props.image;
        const {classes} = this.props;
        const container_height = this.state && this.state.header_height;
        return (
            <header ref={(header) => {this.header = header}}>
                <div
                    ref={trans_overlay => this.trans_overlay = trans_overlay}
                    className={classes.trans_overlay + ' ' + classes.banner_height} />
                <OverlayMenu
                    ref={menu => this.menu = menu}
                    title={this.props.title}
                    container_height={container_height}
                    text_colour={this.props.text_colour}
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
