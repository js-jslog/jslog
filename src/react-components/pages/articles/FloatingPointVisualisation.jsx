import React from 'react';
import {withStyles} from 'material-ui/styles';

import Typography from 'material-ui/Typography';
import VideoFigure from '../../VideoFigure.jsx';

const styles = theme => ({
});

const title = "Floating point visualisation";
const image = "floating-point-visualisation.jpg";
const link = "floating-point-visualisation";
const blurb = "A video shining some light on the mechanisms and limitations behind floating point number representation";
const published = true;

class PageContents extends React.Component {
    render () {
        const {classes} = this.props;
        return (
            <div>
                <VideoFigure
                    videoId='MqHDDtVYJRI'
                />
                <Typography>
                    This fascinating expose of the inner workings of the IEEE floating point standard gives foundation to some of the quirky features of this system
                </Typography>
            </div>
        )
    }
};

const StyledPageContents = withStyles(styles)(PageContents);
export {StyledPageContents}
export {title};
export {image};
export {blurb};
export {link};
export {published};
