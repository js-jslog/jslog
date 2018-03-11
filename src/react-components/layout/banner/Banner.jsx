import React from 'react';
import ReactDOM from 'react-dom';
import {withStyles} from 'material-ui/styles';
import BannerOverlay from './BannerOverlay.jsx';

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

class Banner extends React.Component {
    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('resize', this.updateElementSizeCache.bind(this));
        this.updateElementSizeCache();
        this.trans_overlay.style.background = this.props.background_colour;
    }
    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
        window.removeEventListener('resize', this.updateElementSizeCache.bind(this));
    }
    updateElementSizeCache () {
        const banner_height = getComputedStyle(this.banner).height.split('px')[0];
        const overlay_height = getComputedStyle(ReactDOM.findDOMNode(this.overlay)).height.split('px')[0];
        this.setState({banner_height: banner_height});
        this.setState({overlay_height: overlay_height});
    }
    handleScroll (event) {
        const h1 = this.state.banner_height;
        const h2 = this.state.overlay_height;
        const h = h1 - h2 - 70;
        const y = window.scrollY;
        this.trans_overlay && (this.trans_overlay.style.opacity = y/h);
    }
    render () {
        const image_src = '/images/hero/' + this.props.image;
        const {classes, children} = this.props;
        const container_height = this.state && this.state.banner_height;
        return (
            <header ref={(banner) => {this.banner = banner}}>
                <div
                    ref={trans_overlay => this.trans_overlay = trans_overlay}
                    className={classes.trans_overlay + ' ' + classes.banner_height} />
                    <BannerOverlay
                        ref={(overlay) => {this.overlay = overlay}}
                        title={this.props.title}
                        container_height={container_height}
                        text_colour={this.props.text_colour}
                    >
                        {children}
                    </BannerOverlay>
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

export default withStyles(styles)(Banner);
