import React from 'react';
import { BlockQuote, BodyText, Caption, HeadingBlurb, HeadingTitle, SectionHeading, SectionSubheading } from '../../layout/typography/index.js';
import PostContent from '../../layout/wrapping/PostContent.jsx';
import PostHeader from '../../layout/wrapping/PostHeader.jsx';
import {withStyles} from 'material-ui/styles';

import Typography from 'material-ui/Typography';
import VideoFigure from '../../layout/figure/VideoFigure.jsx';

const styles = theme => ({
});

const title = "Floating point visualisation";
const image = "floating-point-visualisation.jpg";
const link = "floating-point-visualisation";
const blurb = "A video shining some light on the mechanisms and limitations behind floating point number representation";
const published = true;
const date = new Date('01/01/2016');

class PageContents extends React.Component {
    render () {
        const {classes} = this.props;
        return (
            <div>
                <PostHeader>
                    <HeadingTitle>
                        {title}
                    </HeadingTitle>
                    <HeadingBlurb>
                        {blurb}
                    </HeadingBlurb>
                </PostHeader>
                <PostContent>
                    <VideoFigure
                        videoId='MqHDDtVYJRI'
                    />
                    <BodyText>
                        This fascinating expose of the inner workings of the IEEE floating point standard gives foundation to some of the quirky features of this system
                    </BodyText>
                </PostContent>
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
export {date};
