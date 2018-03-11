import React from 'react';
import Paper from 'material-ui/Paper';
import {withStyles} from 'material-ui/styles';

import Figure from './Figure.jsx';
import YoutubePlayer from 'react-youtube-player';

const styles = theme => ({
    paper: {
        boxShadow: theme.shadows[10],
    }
});

class VideoFigure extends React.Component {
    componentDidMount () {
        this.updateAspectRatio();
        window.addEventListener('resize', this.updateAspectRatio.bind(this));
    };
    componentWillUnmount () {
        window.removeEventListener('resize', this.updateAspectRatio.bind(this));
    };
    updateAspectRatio () {
        var width = getComputedStyle(this.fig).width.split('px')[0];
        var height = (width * 9 / 16) + 'px';
        this.fig.style.height = height;
    };
    render () {
        const {classes, children} = this.props;
        return (
            <Figure>
                <Paper className={classes.paper}>
                    <div ref={fig => this.fig = fig}>
                        <YoutubePlayer
                            videoId={this.props.videoId}
                        />
                    </div>
                </Paper>
            </Figure>
        );
    }
};

export default withStyles(styles)(VideoFigure);
