import React from 'react';

import BannerNav from '../layout/nav/BannerNav.jsx';
import Footer from '../layout/nav/Footer.jsx';
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
        <StyledPageContents />
        <Footer />
    </div>
};

export default withStyles(styles)(ArticleContainer);
