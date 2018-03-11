import React from 'react';

import {withStyles} from 'material-ui/styles';

import Typography from 'material-ui/Typography';
import * as Scroll from 'react-scroll';

const styles = function (theme) {
    theme.overrides.MuiTypography.title.color = 'inherit';
    theme.overrides.MuiButton.root.color = 'inherit';
    theme.overrides.MuiButton.root.paddingRight = '0';
    return {
    overlay: {
        color: theme.palette.primary.main,
        position: 'fixed',
        top: '0',
        zIndex: theme.zIndex.appBar,
        right: '0',
        textAlign: 'right',
        padding: theme.scales.primary.p1,
        [theme.breakpoints.up('sm')]: {
            padding: theme.scales.primary.p2,
        },
        [theme.breakpoints.up('md')]: {
            paddingRight: theme.scales.primary.p4,
        },
    },
    page_title: {
        margin: '0',
        padding: '0',
        fontSize: theme.scales.primary.p3,
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.scales.primary.p4,
        },
    },
    childContent: {
        float: 'right',
        visibility: 'hidden',
    },
}};

class BannerOverlay extends React.Component {

    componentDidMount () {
        this.overlay.style.color = this.props.text_colour;
        window.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('resize', this.updateElementSizeCache.bind(this));
    };
    componentWillReceiveProps(nextProps) {
        if (nextProps.container_height !== this.props.container_height) {
            this.updateElementSizeCache();
            if (!this.initial_scroll_performed) {
                this.scrollToContent(nextProps.container_height);
                this.initial_scroll_performed = true;
            }
        }
    };
    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
        window.removeEventListener('resize', this.updateElementSizeCache.bind(this));
    };
    updateElementSizeCache () {
        const overlay_height = getComputedStyle(this.overlay).height.split('px')[0];
        const overlay_padding_top = getComputedStyle(this.overlay).paddingTop.split('px')[0];
        const overlay_padding_bottom = getComputedStyle(this.overlay).paddingBottom.split('px')[0];
        const overlay_total = parseFloat(overlay_height) + parseFloat(overlay_padding_top) + parseFloat(overlay_padding_bottom);
        this.overlay_total = overlay_total;
    };
    handleScroll (event) {
        const diff = parseFloat(this.props.container_height) - parseFloat(this.overlay_total);
        if (window.scrollY < diff - 1) {
            this.overlay.style.position = 'fixed';
            this.overlay.style.top = 0;
            this.childContent.style.visibility = 'hidden';
        }
        if (window.scrollY > diff - 1) {
            this.overlay.style.position = 'absolute';
            this.overlay.style.top = diff + 'px';
            this.childContent.style.visibility = 'visible';
        }
    };
    scrollToContent (container_height) {
        const diff = parseFloat(container_height) - parseFloat(this.overlay_total)
        const scroll = Scroll.animateScroll;
        scroll.scrollTo(diff, {
            delay: 250,
            duration: 2500,
        });
    };
    render() {
        const {classes, children} = this.props;
        return (
            <div
                className={classes.overlay}
                ref={overlay => this.overlay = overlay}
            >
                <Typography
                    variant='title'
                    className={classes.page_title}
                >
                    {this.props.title}
                </Typography>
                <div
                    className={classes.childContent}
                    ref={childContent => this.childContent = childContent}
                >
                    {children}
                </div>
            </div>
        );
    };
}

export default withStyles(styles)(BannerOverlay);
