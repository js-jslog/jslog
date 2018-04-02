import React from 'react';

import PostContent from '../layout/wrapping/PostContent.jsx';
import ContentList from '../layout/nav/ContentList.jsx';
import Footer from '../layout/nav/Footer.jsx';
import MinimalBanner from '../layout/nav/MinimalBanner.jsx';
import {withStyles} from 'material-ui/styles';

import articles from './articles/articles.js';

const styles = theme => ({});

let link_keyed_article_components = {};
articles.forEach((article_components) => {
    const link = article_components.link;
    link_keyed_article_components[link] = article_components;
});

const ArticleContainer = function (props) {
    const {classes, match} = props;
    const {StyledPageContents, title, image, overlayColours} = link_keyed_article_components[match.params.article_id];
    const text_colour = overlayColours && overlayColours.text_colour;
    const background_colour = overlayColours && overlayColours.background_colour;
    return <div>
        <MinimalBanner />
        <StyledPageContents />
        <Footer />
        <PostContent medium>
            <ContentList title='Recently added' />
        </PostContent>
    </div>
};

export default withStyles(styles)(ArticleContainer);
